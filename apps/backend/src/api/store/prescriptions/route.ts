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
    const cookie =
      req.headers.cookie || ""

    const jwtMatch =
      cookie.match(
        /_medusa_jwt=([^;]+)/
      )

    if (!jwtMatch) {
      return res.json({
        prescriptions: [],
      })
    }

    const token = jwtMatch[1]

    const payload = JSON.parse(
      Buffer.from(
        token.split(".")[1],
        "base64"
      ).toString()
    )

    const customerId =
      payload.actor_id

    console.log(
      "Customer ID:",
      customerId
    )

    const result =
      await pool.query(
        `
        SELECT *
        FROM prescriptions
        WHERE customer_id = $1
        ORDER BY created_at DESC
        `,
        [customerId]
      )

    return res.json({
      prescriptions:
        result.rows,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      prescriptions: [],
    })
  }
}