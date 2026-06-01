export default function LabTestsPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen py-6 md:py-10">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>

            {/* HEADING */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Book lab tests online from trusted and certified labs
            </h1>

            {/* SEARCH BAR */}
            <div className="mt-8 md:mt-10 bg-white rounded-3xl md:rounded-full shadow-sm border overflow-hidden">

              <div className="flex flex-col md:flex-row">

                <div className="px-5 py-4 text-base md:text-lg border-b md:border-b-0 md:border-r">
                  📍 Pune
                </div>

                <input
                  type="text"
                  placeholder="Search tests or full body checkups"
                  className="flex-1 px-5 py-4 outline-none text-base md:text-lg"
                />

                <button className="bg-slate-500 hover:bg-slate-600 text-white px-6 md:px-8 py-4 transition-all">
                  🔍
                </button>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

              <button className="bg-blue-50 rounded-2xl py-5 text-base md:text-lg font-medium hover:shadow-md transition-all">
                📞 Book via Phone Call
              </button>

              <button className="bg-pink-50 rounded-2xl py-5 text-base md:text-lg font-medium hover:shadow-md transition-all">
                🧾 Quick Order
              </button>

              <button className="bg-green-50 rounded-2xl py-5 text-base md:text-lg font-medium hover:shadow-md transition-all">
                💬 Book via Whatsapp
              </button>

            </div>

            {/* TEST CATEGORIES */}
            <div className="bg-white rounded-3xl p-5 md:p-6 mt-8 md:mt-10 border">

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Find tests & packages for your needs
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {[
                  {
                    icon: "🩺",
                    title: "Full Body Packages",
                  },
                  {
                    icon: "🩻",
                    title: "X Rays, Scans & More",
                  },
                  {
                    icon: "🌡️",
                    title: "Fever Tests",
                  },
                  {
                    icon: "🩸",
                    title: "Diabetes Tests",
                  },
                  {
                    icon: "💊",
                    title: "Vitamin Tests",
                  },
                  {
                    icon: "❤️",
                    title: "Heart Health Tests",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="text-3xl mb-3">
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-5">

            {[
              {
                image: "/hero/labtest/img-1.jpeg",
                title:
                  "Trusted NABL certified labs",
                desc:
                  "Hygienic & safety assured testing",
              },
              {
                image: "/hero/labtest/img-2.jpeg",
                title:
                  "Wide coverage across India",
                desc:
                  "Most trusted service in 55+ cities",
              },
              {
                image: "/hero/labtest/img-3.jpeg",
                title:
                  "Home sample collection",
                desc:
                  "Safe pickup at your doorstep",
              },
              {
                image: "/hero/labtest/img-4.jpeg",
                title:
                  "Fast, accurate reports",
                desc:
                  "Doctor-verified, delivered on time",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative rounded-3xl overflow-hidden h-[220px] sm:h-[280px] md:h-[320px]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white p-5">

                  <h3 className="text-lg md:text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="text-sm md:text-base mt-2">
                    {card.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* WHY CHOOSE US */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl p-6 text-center">
              <div className="text-4xl">🏥</div>
              <h3 className="font-bold mt-4">
                Certified Labs
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-6 text-center">
              <div className="text-4xl">🚚</div>
              <h3 className="font-bold mt-4">
                Home Collection
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-6 text-center">
              <div className="text-4xl">⚡</div>
              <h3 className="font-bold mt-4">
                Fast Reports
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-6 text-center">
              <div className="text-4xl">💰</div>
              <h3 className="font-bold mt-4">
                Affordable Pricing
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}