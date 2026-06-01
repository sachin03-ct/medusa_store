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

console.log(
  "PAYMENT SESSION ID:",
  paymentSessionId
)

if (!paymentSessionId) {

  console.log(
    "Payment session not found for Razorpay order:",
    razorpayOrderId
  )

  await client.end()

  return res.status(404).json({
    success: false,
    message: "Payment session not found",
  })
}

        console.log('sessionResult',sessionResult);
      console.log(
        "PAYMENT SESSION ID:",
        paymentSessionId
      )
      console.log("sessionResult", sessionResult.rows)

await client.query(
  `
  UPDATE payment_session
  SET data = data || $1::jsonb
  WHERE id = $2
  `,
  [
    JSON.stringify({
      razorpay_order_id:
        razorpayPayment.order_id,

      razorpay_payment_id:
        razorpayPayment.id,

      payment_status:
        razorpayPayment.status,

      captured_at:
        new Date().toISOString(),
    }),

    paymentSessionId,
  ]
)

console.log(
  "PAYMENT SESSION UPDATED"
)

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

if (!medusaPaymentId) {

  console.log(
    "Medusa payment not found"
  )

  await client.end()

  return res.status(404).json({
    success: false,
    message: "Medusa payment not found",
  })
}
      console.log(
        "MEDUSA PAYMENT ID:",
        medusaPaymentId
      )
     await client.end()
    
    }

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