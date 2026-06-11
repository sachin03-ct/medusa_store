import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

import { pool } from "../../../../../lib/db"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const { id } = req.params

  try {
    const draftOrderId =
      `DO-${Date.now()}`

    await pool.query(
      `
      UPDATE prescriptions
      SET
        status='approved',
        draft_order_id=$1
      WHERE id=$2
      `,
      [draftOrderId, id]
    )

    return res.json({
      success: true,
      draft_order_id: draftOrderId,
    })
  } catch (e) {
    console.error(e)

    return res.status(500).json({
      success: false,
    })
  }
}