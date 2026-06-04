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
    console.log("CONTACT API HIT")

    const {
      name,
      email,
      phone,
      message,
    } = req.body

    console.log("EMAIL_USER:", process.env.EMAIL_USER)
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS)

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

      subject: `New Contact Form Message - ${name}`,

      html: `
        <h2>Contact Form Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <p>
          <b>Message:</b><br/>
          ${message}
        </p>
      `,
    })

    return res.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      error: String(error),
    })
  }
}