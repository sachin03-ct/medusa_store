import nodemailer from "nodemailer"
import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

import { pool } from "../../../lib/db"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const { name, phone, address } =
    req.body as {
    name: string
    phone: string
    address: string
  }

    const file = (req as any).file

    console.log("Uploaded File:", file)

    if (!name || !phone || !address) {
  return res.status(400).json({
    success: false,
    message:
      "Name, phone and address are required",
  })
}
    

    if (!file) {
      return res.status(400).json({
        success: false,
        message:
          "Prescription file is required",
      })
    }

    const prescriptionId =
      `RX-${Date.now()}`

    const imageUrl =
      `uploads/prescriptions/${file.filename}`

    await pool.query(
      `
      INSERT INTO prescriptions
      (
        prescription_id,
        customer_name,
        phone_number,
        address,
        image_url
      )
      VALUES ($1,$2,$3,$4,$5)
      `,
      [
        prescriptionId,
        name,
        phone,
        address,
        imageUrl,
      ]
    )

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:
            process.env.EMAIL_USER,
          pass:
            process.env.EMAIL_PASS,
        },
      })

    await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `New Prescription ${prescriptionId}`,

  html: `
    <h2>New Prescription Received</h2>

    <p><b>Prescription ID:</b> ${prescriptionId}</p>
    <p><b>Name:</b> ${name}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Address:</b>${address}</p>

    <p>
      Prescription image attached below.
    </p>

    <img
      src="cid:prescriptionImage"
      width="500"
    />
  `,

  attachments: [
    {
      filename: file.filename,
      path: file.path,
      cid: "prescriptionImage",
    },
  ],
})
    return res.json({
      success: true,
      prescriptionId,
      imageUrl,
    })
  } catch (error: any) {
    console.error(
      "Prescription Upload Error:"
    )

    console.error(error)

    return res.status(500).json({
      success: false,
      message:
        error?.message ||
        "Failed to upload prescription",
    })
  }
}