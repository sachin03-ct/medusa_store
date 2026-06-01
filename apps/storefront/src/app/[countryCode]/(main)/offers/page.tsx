export default function OffersPage() {
  const medicineOffers = [
    {
      title: "₹150 Cashback via UPI",
      description:
        "Get cashback on orders above ₹599 paid through UPI.",
      expiry: "30 Jun 2026",
      badge: "UPI OFFER",
    },
    {
      title: "Flat ₹100 OFF",
      description:
        "Use coupon SAVE100 on orders above ₹999.",
      expiry: "30 Jun 2026",
      badge: "COUPON",
    },
    {
      title: "10% Instant Discount",
      description:
        "Applicable on selected medicines and healthcare products.",
      expiry: "30 Jun 2026",
      badge: "SPECIAL",
    },
  ]

  const categoryOffers = [
    {
      name: "Diabetes Care",
      discount: "25% OFF",
      emoji: "💉",
    },
    {
      name: "Heart Care",
      discount: "15% OFF",
      emoji: "❤️",
    },
    {
      name: "Vitamins",
      discount: "Buy 2 Get 1",
      emoji: "💊",
    },
    {
      name: "Ayurveda",
      discount: "20% OFF",
      emoji: "🌿",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">

          <h1 className="text-4xl md:text-5xl font-bold">
            Offers & Discounts
          </h1>

          <p className="mt-4 text-lg text-cyan-50 max-w-2xl">
            Save more on medicines, healthcare products,
            lab tests and wellness essentials.
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">

        {/* TOP BANNERS */}

        <div className="grid md:grid-cols-3 gap-5 mb-10">

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-bold text-lg">
              🚚 Free Delivery
            </h3>

            <p className="text-gray-600 mt-2">
              On orders above ₹499
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-bold text-lg">
              💳 Razorpay Cashback
            </h3>

            <p className="text-gray-600 mt-2">
              Get up to ₹150 cashback
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-bold text-lg">
              🎁 First Order Offer
            </h3>

            <p className="text-gray-600 mt-2">
              Flat ₹100 OFF
            </p>
          </div>

        </div>

        {/* MEDICINE OFFERS */}

        <h2 className="text-3xl font-bold mb-6">
          Medicine Offers
        </h2>

        <div className="space-y-5">

          {medicineOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>

                  <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {offer.badge}
                  </span>

                  <h3 className="text-xl font-bold">
                    {offer.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {offer.description}
                  </p>

                  <p className="text-sm text-gray-400 mt-3">
                    Expiry: {offer.expiry}
                  </p>

                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold">
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* CATEGORY OFFERS */}

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Category Discounts
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {categoryOffers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-4">
                {item.emoji}
              </div>

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p className="text-cyan-600 font-bold text-xl mt-2">
                {item.discount}
              </p>
            </div>
          ))}

        </div>

        {/* PAYMENT OFFERS */}

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Payment Offers
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-bold text-xl">
              💳 UPI Offer
            </h3>

            <p className="mt-3 text-gray-600">
              Get ₹150 cashback on transactions
              above ₹599.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-bold text-xl">
              🏦 Bank Offer
            </h3>

            <p className="mt-3 text-gray-600">
              10% instant discount on selected
              cards.
            </p>
          </div>

        </div>

        {/* LAB OFFERS */}

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Lab Test Offers
        </h2>

        <div className="bg-white rounded-2xl p-8 border shadow-sm">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                NEW USER
              </span>

              <h3 className="text-2xl font-bold mt-4">
                Get Extra 15% OFF
              </h3>

              <p className="text-gray-600 mt-2">
                Applicable on all lab tests.
              </p>
            </div>

            <div className="bg-cyan-50 text-cyan-700 px-6 py-4 rounded-xl font-bold">
              LAB15
            </div>

          </div>

        </div>

        {/* FAQ */}

        <div className="mt-16 bg-white rounded-2xl p-8 border">

          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div>
              <h4 className="font-semibold">
                How do I apply a coupon?
              </h4>
              <p className="text-gray-600">
                Apply the coupon during checkout.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Can multiple offers be combined?
              </h4>
              <p className="text-gray-600">
                Usually only one coupon can be used
                per order.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}