import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

const { Client } = require("pg")

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const client = new Client({
    connectionString:
      process.env.DATABASE_URL,
  })

  try {

    const { order_id } =
      req.body as any

    await client.connect()

    const result =
      await client.query(
        `
        SELECT data
        FROM payment_session
        WHERE data->>'id' = $1
        LIMIT 1
        `,
        [order_id]
      )

    const sessionData =
      result.rows[0]?.data

    console.log(
      "SESSION DATA:",
      sessionData
    )

    return res.json({
      success:
        sessionData?.payment_status ===
        "captured",
    })

  } catch (error) {

    console.log(
      "CHECK STATUS ERROR:",
      error
    )

    return res.status(500).json({
      success: false,
    })

  } finally {

    await client.end()

  }
}