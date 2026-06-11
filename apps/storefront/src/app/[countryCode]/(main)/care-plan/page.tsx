"use client"

import { useState } from "react"

export default function CarePlanPage() {
  const [selectedPlan, setSelectedPlan] = useState("3")

  const benefits = [
    {
      title: "Get extra 4% discounts",
      description:
        "Guaranteed savings over & above promotional offers. Extra discounts on all product purchases.",
      icon: "🛍️",
    },
    {
      title: "Discounted lab test",
      description:
        "Up to 50% discount on lab tests available on select tests.",
      icon: "🧪",
    },
    {
      title: "No Shipping Charges",
      description:
        "Unlimited free shipping on eligible orders.",
      icon: "📦",
    },
    {
      title: "Free E-Consultation",
      description:
        "Get free consultation from experts across specialities.",
      icon: "👨‍⚕️",
    },
    {
      title: "Exclusive Offers",
      description:
        "Member exclusive offers from top healthcare brands.",
      icon: "🎟️",
    },
    {
      title: "Introducing Rapid Delivery",
      description:
        "Get medicines delivered faster than before.",
      icon: "🚚",
    },
  ]

  const additionalBenefits = [
    {
      title: "Early Sale Access",
      description:
        "Be among the first ones to shop during sale days.",
      icon: "🛍️",
    },
    {
      title: "Priority Processing",
      description:
        "Your prescriptions are reviewed and validated faster.",
      icon: "📦",
    },
    {
      title: "Premium Customer Care",
      description:
        "Dedicated support team for all premium members.",
      icon: "🎧",
    },
  ]

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span
                className="
                    inline-block
                    px-5
                    py-2
                    rounded-md
                    text-white
                    font-semibold
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                "
                >
                Care Plan
                </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                Reduce your medical
                <br />
                expenses by HALF
              </h1>

              <p className="text-xl text-gray-600 mt-5">
                Save for things that make you happy
              </p>

              <button
                className="
                    mt-8
                    text-white
                    px-10
                    py-4
                    rounded-lg
                    font-semibold
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    hover:opacity-90
                "
                >
                Explore Plans
                </button>

              <p className="mt-6 text-lg">
                Plans starting ₹43/month
              </p>
            </div>

            <div>
              <img
                src="/hero/care-plan/img-1.avif"
                alt="Care Plan"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex gap-5"
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL BENEFITS */}
      <section className="border-t py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-20">
            Additional Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {additionalBenefits.map((item) => (
              <div
                key={item.title}
                className="flex gap-5"
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-cyan-100 p-10">
              <span
                className="
                    inline-block
                    px-5
                    py-2
                    rounded-md
                    text-white
                    font-semibold
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                "
                >
                Care Plan
                </span>

              <h2 className="text-5xl font-bold mt-6">
                More discounts,
                faster delivery and extra care
              </h2>

              <p className="mt-6 text-xl">
                Join now and enjoy all benefits
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Free Shipping</p>
                <p>✓ 1 Free E-consultation</p>
                <p>✓ All benefits mentioned above</p>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-8">
                Choose a plan that's right for you
              </h2>

              <div
                onClick={() =>
                  setSelectedPlan("3")
                }
                className={`
                  border-2
                  rounded-xl
                  p-3
                  cursor-pointer
                  mb-5
                  ${
                    selectedPlan === "3"
                      ? "border-cyan-500"
                      : "border-gray-200"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold">
                  3 months plan
                </h3>

                <div className="text-center mt-5">
                  <div className="text-5xl font-bold">
                    ₹129
                  </div>

                  <p className="mt-4 text-l">
                    ₹43/month
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  setSelectedPlan("6")
                }
                className={`
                  border-2
                  rounded-xl
                  p-3
                  cursor-pointer
                  ${
                    selectedPlan === "6"
                      ? "border-cyan-500"
                      : "border-gray-200"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold">
                  6 months plan
                </h3>

                <div className="text-center mt-5">
                  <div className="text-5xl font-bold">
                    ₹239
                  </div>

                  <p className="mt-4 text-l">
                    ₹39/month
                  </p>
                </div>
              </div>

              <button
                className="
                    w-full
                    mt-8
                    text-white
                    py-5
                    rounded-xl
                    text-xl
                    font-semibold
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    hover:opacity-90
                "
                >
                Join Now
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* SAVINGS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            How much will I save if I buy this plan?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              className="
              bg-gradient-to-r
            from-cyan-300
              p-8
              rounded-xl
              text-center
            "
            >
              <div className="text-7xl font-bold">
                ₹1490
              </div>

              <p className="mt-4 text-xl">
                Savings in 3 Months
              </p>
            </div>

            <div className="space-y-8 text-xl">
              <div>
                ✅ I buy medicines every month
                <p className="text-gray-600 mt-2">
                  Assuming ₹1000 medicine purchase monthly
                </p>
              </div>

              <div>
                ✅ I visit the Doctor regularly
                <p className="text-gray-600 mt-2">
                  Assuming consultation worth ₹500
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}