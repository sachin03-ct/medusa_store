import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

import { pool } from "../../../lib/db"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const result = await pool.query(`
      SELECT *
      FROM prescriptions
      ORDER BY created_at DESC
    `)

    return res.json({
      prescriptions: result.rows,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: "Failed to fetch prescriptions",
    })
  }
}