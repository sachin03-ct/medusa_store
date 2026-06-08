import { defineMiddlewares } from "@medusajs/framework/http"

import * as bodyParser from "body-parser"
import multer from "multer"

const prescriptionStorage = multer.diskStorage({
  destination: (
    req,
    file,
    cb
  ) => {
    cb(
      null,
      "uploads/prescriptions"
    )
  },

  filename: (
    req,
    file,
    cb
  ) => {
    cb(
      null,
      `${Date.now()}-${file.originalname}`
    )
  },
})

const uploadPrescription =
  multer({
    storage:
      prescriptionStorage,
  })

export default defineMiddlewares({
  routes: [
    {
      matcher:
        "/store/upload-prescription",

      methods: ["POST"],

      middlewares: [
        uploadPrescription.single(
          "file"
        ),
      ],
    },

    {
      matcher:
        "/store/create-razorpay-order",

      methods: ["POST"],

      middlewares: [],
    },

    {
      matcher:
        "/store/verify-razorpay-payment",

      methods: ["POST"],

      middlewares: [],
    },

    {
      matcher:
        "/webhooks/razorpay",

      methods: ["POST"],

      middlewares: [
        bodyParser.raw({
          type: "*/*",
        }),
      ],
    },
  ],
})