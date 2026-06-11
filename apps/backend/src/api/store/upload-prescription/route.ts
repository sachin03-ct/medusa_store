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
    const {
      name,
      email,
      phone,
      address,
    } = req.body as {
      name: string
      email: string
      phone: string
      address: string
    }

    const file = (req as any).file

    if (
      !name ||
      !email ||
      !phone ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, phone and address are required",
      })
    }

    if (!file) {
      return res.status(400).json({
        success: false,
        message:
          "Prescription file is required",
      })
    }

    // =========================
    // FIND CUSTOMER BY EMAIL
    // =========================

    const customerResult =
      await pool.query(
        `
        SELECT id
        FROM customer
        WHERE email = $1
        LIMIT 1
        `,
        [email]
      )

    const customerId =
      customerResult.rows[0]?.id || null

    console.log(
      "Customer Found:",
      customerId
    )

    // =========================
    // CREATE PRESCRIPTION
    // =========================

    const prescriptionId =
      `RX-${Date.now()}`

    const imageUrl =
      `uploads/prescriptions/${file.filename}`

    await pool.query(
      `
      INSERT INTO prescriptions
      (
        prescription_id,
        customer_id,
        customer_name,
        email,
        phone_number,
        address,
        image_url,
        status
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7,'pending'
      )
      `,
      [
        prescriptionId,
        customerId,
        name,
        email,
        phone,
        address,
        imageUrl,
      ]
    )

    // =========================
    // EMAIL ADMIN
    // =========================

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

        <p>
          <b>Prescription ID:</b>
          ${prescriptionId}
        </p>

        <p>
          <b>Customer ID:</b>
          ${customerId || "Guest User"}
        </p>

        <p>
          <b>Name:</b>
          ${name}
        </p>

        <p>
          <b>Email:</b>
          ${email}
        </p>

        <p>
          <b>Phone:</b>
          ${phone}
        </p>

        <p>
          <b>Address:</b>
          ${address}
        </p>

        ${
          file.mimetype.startsWith(
            "image/"
          )
            ? `
            <h3>Prescription Image</h3>

            <img
              src="cid:prescriptionImage"
              width="500"
            />
          `
            : `
            <p>
              Prescription PDF attached.
            </p>
          `
        }
      `,

      attachments: [
        {
          filename:
            file.originalname,
          path: file.path,

          ...(file.mimetype.startsWith(
            "image/"
          )
            ? {
                cid:
                  "prescriptionImage",
              }
            : {}),
        },
      ],
    })

    return res.json({
      success: true,
      prescriptionId,
      customerId,
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