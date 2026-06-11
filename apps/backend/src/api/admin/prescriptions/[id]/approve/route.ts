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

  await pool.query(
    `
    UPDATE prescriptions
    SET status='approved'
    WHERE id=$1
    `,
    [id]
  )

  res.json({
    success: true,
  })
}