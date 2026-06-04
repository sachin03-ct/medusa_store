import nodemailer from "nodemailer"
import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const { name, phone, fileName } = req.body as {
      name: string
      phone: string
      fileName: string
    }

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Prescription Uploaded",
      html: `
        <h2>New Prescription Received</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>File:</b> ${fileName}</p>
      `,
    })

    return res.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    })
  }
}