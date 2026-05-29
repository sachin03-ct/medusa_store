import { defineMiddlewares } from "@medusajs/framework/http"

import * as bodyParser from "body-parser"

export default defineMiddlewares({
  routes: [

    {
      matcher: "/store/create-razorpay-order",
      methods: ["POST"],
      middlewares: [],
    },

    {
      matcher: "/store/verify-razorpay-payment",
      methods: ["POST"],
      middlewares: [],
    },

    {
      matcher: "/webhooks/razorpay",
      methods: ["POST"],

      middlewares: [
        bodyParser.raw({
          type: "*/*",
        }),
      ],
    },
  ],
})