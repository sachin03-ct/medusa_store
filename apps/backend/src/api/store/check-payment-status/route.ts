import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

;(globalThis as any).paymentStore =
  (globalThis as any).paymentStore || {}

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {

    const { order_id } = req.body as any

    const verified =
      (globalThis as any).paymentStore[order_id]

    return res.json({
      success: verified || false,
    })

  } catch (error) {

    console.log(error)

    return res.status(500).json({
      success: false,
    })
  }
}