import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

import { pool } from "../../../../../lib/db"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const { id } = req.params

    const { order_id } =
      req.body as {
        order_id: string
      }

    if (!order_id) {
      return res.status(400).json({
        success: false,
        message: "Order ID is required",
      })
    }

    const result =
      await pool.query(
        `
        UPDATE prescriptions
        SET order_id = $1
        WHERE id = $2
        RETURNING *
        `,
        [order_id, id]
      )

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Prescription not found",
      })
    }

    return res.json({
      success: true,
      prescription:
        result.rows[0],
    })
  } catch (error: any) {
    console.error(
      "Attach Order Error:"
    )
    console.error(error)

    return res.status(500).json({
      success: false,
      message:
        error?.message ||
        "Failed to attach order",
    })
  }
}