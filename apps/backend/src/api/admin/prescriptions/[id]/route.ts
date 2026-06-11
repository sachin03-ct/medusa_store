import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

import { pool } from "../../../../lib/db"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const { id } = req.params

    const result = await pool.query(
      `
      SELECT *
      FROM prescriptions
      WHERE id = $1
      `,
      [id]
    )

    if (!result.rows.length) {
      return res.status(404).json({
        message: "Prescription not found",
      })
    }

    return res.json(result.rows[0])
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: "Server error",
    })
  }
}