import fs from "fs"
import path from "path"

import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

export const AUTHENTICATE = false

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const filename = req.params.filename

  const filePath = path.join(
    process.cwd(),
    "uploads",
    "prescriptions",
    filename
  )

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      message: "File not found",
    })
  }

  return res.sendFile(filePath)
}