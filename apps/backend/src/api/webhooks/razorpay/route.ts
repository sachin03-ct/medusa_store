import crypto from "crypto"

import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

const { Client } = require("pg")

;(globalThis as any).paymentStore =
  (globalThis as any).paymentStore || {}

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {

    // =========================
    // VERIFY WEBHOOK SIGNATURE
    // =========================

    const secret =
      process.env.RAZORPAY_WEBHOOK_SECRET || ""

    const signature =
      req.headers["x-razorpay-signature"] as string

    const rawBody =
      JSON.stringify(req.body)

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex")

    console.log(
      "EXPECTED SIGNATURE:",
      expectedSignature
    )

    if (signature !== expectedSignature) {

      console.log("INVALID SIGNATURE")

      return res.status(400).json({
        success: false,
      })
    }

    // =========================
    // WEBHOOK BODY
    // =========================

    const bodyData = req.body as any

    const event = bodyData.event

    console.log("EVENT:", event)

    // =========================
    // PAYMENT CAPTURED
    // =========================

    if (event === "payment.captured") {

      const razorpayPayment =
        bodyData.payload.payment.entity

      const razorpayOrderId = razorpayPayment.order_id

      console.log(
        "PAYMENT CAPTURED:",
        razorpayOrderId
      )

      // SAVE PAYMENT STATUS
      ;(globalThis as any).paymentStore[
        razorpayOrderId
      ] = true

      // =========================
      // CONNECT DATABASE
      // =========================

      const client = new Client({
        connectionString:
          process.env.DATABASE_URL,
      })

      await client.connect()

      // =========================
      // FIND PAYMENT SESSION
      // =========================

      const sessionResult =
        await client.query(
          `
          SELECT id
          FROM payment_session
          WHERE data->>'id' = $1
          LIMIT 1
          `,
          [razorpayOrderId]
        )

      const paymentSessionId =
        sessionResult.rows[0]?.id
        console.log('sessionResult',sessionResult);
      console.log(
        "PAYMENT SESSION ID:",
        paymentSessionId
      )

      // =========================
      // FIND MEDUSA PAYMENT
      // =========================

      const paymentResult =
        await client.query(
          `
          SELECT id
          FROM payment
          WHERE payment_session_id = $1
          LIMIT 1
          `,
          [paymentSessionId]
        )

      const medusaPaymentId =
        paymentResult.rows[0]?.id

      console.log(
        "MEDUSA PAYMENT ID:",
        medusaPaymentId
      )

      await client.end()

      // =========================
      // CAPTURE PAYMENT IN MEDUSA
      // =========================

      if (medusaPaymentId) {

        const captureResponse =
          await fetch(
            `http://localhost:9000/admin/payments/${medusaPaymentId}/capture`,
            {
              method: "POST",

              headers: {
                Authorization:
                  `Bearer ${process.env.MEDUSA_ADMIN_TOKEN}`,

                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({})
            }
          )

        console.log(
          "CAPTURE STATUS:",
          captureResponse.status
        )

        const captureData =
          await captureResponse.json()

        console.log(
          "CAPTURE RESPONSE:",
          captureData
        )
      }
    }

    // =========================
    // SUCCESS
    // =========================

    return res.status(200).json({
      success: true,
    })

  } catch (error) {

    console.log(
      "WEBHOOK ERROR:",
      error
    )

    return res.status(500).json({
      success: false,
    })
  }
}