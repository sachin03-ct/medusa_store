"use client"
import { RadioGroup } from "@headlessui/react"
import { isStripeLike, paymentInfoMap } from "@lib/constants"
import { initiatePaymentSession } from "@lib/data/cart"
import { CheckCircleSolid, CreditCard } from "@medusajs/icons"
import ErrorMessage from "@modules/checkout/components/error-message"
import PaymentContainer, {
  StripeCardContainer,
} from "@modules/checkout/components/payment-container"
import Divider from "@modules/common/components/divider"
import {
  Button,
  Container,
  Heading,
  Text,
  clx,
} from "@modules/common/components/ui"
import { HttpTypes } from "@medusajs/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

declare global {
  interface Window {
    Razorpay: any
  }
}

// LOAD RAZORPAY SDK
const loadRazorpayScript = () => {
  return new Promise((resolve) => {

    // ALREADY LOADED
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement("script")

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js"

    script.onload = () => {
      resolve(true)
    }

    script.onerror = () => {
      resolve(false)
    }

    document.body.appendChild(script)
  })
}

const Payment = ({
  cart,
  availablePaymentMethods,
}: {
  cart: HttpTypes.StoreCart
  availablePaymentMethods: { id: string }[]
}) => {
  const activeSession = cart.payment_collection?.payment_sessions?.find(
    (paymentSession) => paymentSession.status === "pending"
  )

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cardBrand, setCardBrand] = useState<string | null>(null)
  const [cardComplete, setCardComplete] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    activeSession?.provider_id ?? ""
  )

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "payment"

  const setPaymentMethod = async (method: string) => {
    setError(null)
    setSelectedPaymentMethod(method)
    if (isStripeLike(method)) {
      await initiatePaymentSession(cart, {
        provider_id: method,
      })
    }
  }

  const paidByGiftcard = !!(
    (cart as unknown as Record<string, unknown>)?.gift_cards && ((cart as unknown as Record<string, unknown>)?.gift_cards as unknown[])?.length > 0 && cart?.total === 0
  )

  const paymentReady =
    (activeSession && (cart?.shipping_methods?.length ?? 0) !== 0) || paidByGiftcard

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "payment"), {
      scroll: false,
    })
  }

const handleSubmit = async () => {
  setIsLoading(true)

  try {
    let paymentSession: any

    const checkActiveSession =
      activeSession?.provider_id === selectedPaymentMethod

    if (!checkActiveSession) {
      paymentSession = await initiatePaymentSession(cart, {
        provider_id: selectedPaymentMethod,
      })

      console.log(
        "Payment session:",
        paymentSession
      )
    } else {
      // If session already exists, use active cart session
      paymentSession = {
        payment_collection:
          cart.payment_collection,
      }
    }

    const session =
  paymentSession.payment_collection
    .payment_sessions.find(
      (s: any) =>
        s.provider_id ===
        "pp_razorpay_razorpay"
    )
    if (!session) {
    throw new Error(
    "Razorpay payment session not found"
    )
    }

    const razorpayOrderId =
      session.data.id

    const options = {
      key:
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      order_id:
        razorpayOrderId,

      amount:
        session.data.amount,

      currency:
        session.data.currency,

      name:
        "Generic Medicine Store",

      description:
        "Medicine Purchase",

      prefill: {
        name:
          `${cart.shipping_address?.first_name || ""} ${
            cart.shipping_address?.last_name || ""
          }`,

        email:
          cart.email || "",

        contact:
          cart.shipping_address?.phone || "",
      },

      handler: async function (
  response: any
) {

  console.log(
    "Payment Success",
    response
  )

  
  let verified = false

  while (!verified) {

    const statusRes =
      await fetch(
        "http://localhost:9000/store/check-payment-status",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "x-publishable-api-key":
              process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
          },

          body: JSON.stringify({
            order_id:
              response.razorpay_order_id,

            payment_id:
              response.razorpay_payment_id,
          }),
        }
      )

    const data =
    await statusRes.json()

  if (data.success) {
    verified = true
    break
  }

  await new Promise(
    (resolve) =>
      setTimeout(resolve, 1000)
  )
}

  if (!verified) {

    alert(
      "Payment not verified yet"
    )

    return
  }
console.log(
  "Webhook verified:",
  verified
)

console.log(
  "Completing cart:",
  cart.id
)
  // COMPLETE CART AFTER PAYMENT VERIFIED

  const completeRes =
    await fetch(
      `http://localhost:9000/store/carts/${cart.id}/complete`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
        },
      }
    )

  const completeData =
    await completeRes.json()

  console.log(
    "COMPLETE DATA:",
    completeData
  )
  console.log(
  "COMPLETE RESPONSE:",
  completeData
  )
  if (
    completeData.type !== "order"
  ) {

    alert(
      "Order completion failed"
    )

    return
  }

  const medusaOrderId =
    completeData.order.id

  window.location.href =
    `/${cart.region?.countries?.[0]?.iso_2}/account/orders/details/${medusaOrderId}`
},

      theme: {
        color: "#000000",
      },
    }

    const loaded =
      await loadRazorpayScript()

    if (!loaded) {
      alert(
        "Razorpay SDK failed to load"
      )
      return
    }

    const razorpay =
    new window.Razorpay(options)

  razorpay.on(
    "payment.failed",
    () => {
      setIsLoading(false)
    }
  )

  razorpay.open()

  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : String(err)
    )
  } finally {
    setIsLoading(false)
  }
}

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && !paymentReady,
            }
          )}
        >
          Payment
          {!isOpen && paymentReady && <CheckCircleSolid />}
        </Heading>
        {!isOpen && paymentReady && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
              data-testid="edit-payment-button"
            >
              Edit
            </button>
          </Text>
        )}
      </div>
      <div>
        <div className={isOpen ? "block" : "hidden"}>
          {!paidByGiftcard && availablePaymentMethods?.length && (
            <>
              <RadioGroup
                value={selectedPaymentMethod}
                onChange={(value: string) => setPaymentMethod(value)}
              >
                {availablePaymentMethods.map((paymentMethod) => (
                  <div key={paymentMethod.id}>
                    {isStripeLike(paymentMethod.id) ? (
                      <StripeCardContainer
                        paymentProviderId={paymentMethod.id}
                        selectedPaymentOptionId={selectedPaymentMethod}
                        paymentInfoMap={paymentInfoMap}
                        setCardBrand={setCardBrand}
                        setError={setError}
                        setCardComplete={setCardComplete}
                      />
                    ) : (
                      <PaymentContainer
                        paymentInfoMap={paymentInfoMap}
                        paymentProviderId={paymentMethod.id}
                        selectedPaymentOptionId={selectedPaymentMethod}
                      />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </>
          )}

          {paidByGiftcard && (
            <div className="flex flex-col w-1/3">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </Text>
              <Text
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Gift card
              </Text>
            </div>
          )}

          <ErrorMessage
            error={error}
            data-testid="payment-method-error-message"
          />

          <Button
            size="large"
            className="mt-6"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={
              (isStripeLike(selectedPaymentMethod) && !cardComplete) ||
              (!selectedPaymentMethod && !paidByGiftcard)
            }
            data-testid="submit-payment-button"
          >
            {!activeSession && isStripeLike(selectedPaymentMethod)
              ? " Enter card details"
              : "Continue to pay"}
          </Button>
        </div>

        <div className={isOpen ? "hidden" : "block"}>
          {cart && paymentReady && activeSession ? (
            <div className="flex items-start gap-x-1 w-full">
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment method
                </Text>
                <Text
                  className="txt-medium text-ui-fg-subtle"
                  data-testid="payment-method-summary"
                >
                  {paymentInfoMap[activeSession?.provider_id]?.title ||
                    activeSession?.provider_id}
                </Text>
              </div>
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment details
                </Text>
                <div
                  className="flex gap-2 txt-medium text-ui-fg-subtle items-center"
                  data-testid="payment-details-summary"
                >
                  <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                    {paymentInfoMap[selectedPaymentMethod]?.icon || (
                      <CreditCard />
                    )}
                  </Container>
                  <Text>
                    {isStripeLike(selectedPaymentMethod) && cardBrand
                      ? cardBrand
                      : "Another step will appear"}
                  </Text>
                </div>
              </div>
            </div>
          ) : paidByGiftcard ? (
            <div className="flex flex-col w-1/3">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </Text>
              <Text
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Gift card
              </Text>
            </div>
          ) : null}
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default Payment
