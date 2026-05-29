import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {

    const body = req.body as {
      amount: number
      medusa_order_id: string
    }

    const { amount, medusa_order_id } = body
    console.log("Medusa Order ID while creating razorpay order:", medusa_order_id)

    if (!amount || isNaN(Number(amount))) {
      return res.status(400).json({
        error: "Invalid amount",
      })
    }

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        medusa_order_id,
      },
    })

    console.log("RAZORPAY ORDER:", order)
    return res.json(order)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      error: "Failed to create Razorpay order",
    })
  }
}