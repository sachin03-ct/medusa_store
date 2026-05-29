export default function LabTestsPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen py-10">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 px-6">

        {/* LEFT SIDE */}
        <div>

          {/* HEADING */}
          <h1 className="text-6xl font-bold leading-tight text-gray-900">
            Book lab tests online from trusted and certified labs
          </h1>

          {/* SEARCH BAR */}
          <div className="mt-10 flex items-center bg-white rounded-full shadow-sm border overflow-hidden">

            <div className="px-6 py-5 text-lg">
              📍 Pune
            </div>

            <div className="h-8 w-[1px] bg-gray-300"></div>

            <input
              type="text"
              placeholder="Search tests or full body checkups"
              className="flex-1 px-6 py-5 outline-none text-lg"
            />

            <button className="bg-slate-500 hover:bg-slate-600 text-white px-8 py-5 text-xl transition-all">
              🔍
            </button>

          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-3 gap-5 mt-8">

            <button className="bg-blue-50 rounded-2xl py-6 text-lg font-medium hover:shadow-md transition-all">
              📞 Book via Phone Call
            </button>

            <button className="bg-pink-50 rounded-2xl py-6 text-lg font-medium hover:shadow-md transition-all">
              🧾 Quick Order
            </button>

            <button className="bg-green-50 rounded-2xl py-6 text-lg font-medium hover:shadow-md transition-all">
              💬 Book via Whatsapp
            </button>

          </div>

          {/* TEST CARDS */}
          <div className="bg-white rounded-3xl p-6 mt-10 border">

            <h2 className="text-3xl font-bold mb-6">
              Find tests & packages for your needs
            </h2>

            <div className="grid grid-cols-2 gap-5">

              <div className="border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-2xl mb-2">🩺</div>
                <h3 className="text-xl font-semibold">
                  Full Body Packages
                </h3>
              </div>

              <div className="border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-2xl mb-2">🩻</div>
                <h3 className="text-xl font-semibold">
                  X Rays, Scans & More
                </h3>
              </div>

              <div className="border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-2xl mb-2">🌡️</div>
                <h3 className="text-xl font-semibold">
                  Fever Tests
                </h3>
              </div>

              <div className="border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-2xl mb-2">🩸</div>
                <h3 className="text-xl font-semibold">
                  Diabetes Tests
                </h3>
              </div>

              <div className="border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="text-2xl mb-2">💊</div>
                <h3 className="text-xl font-semibold">
                  Vitamins Tests
                </h3>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-5">

          <div className="relative rounded-3xl overflow-hidden h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-5">
              <h3 className="text-2xl font-bold">
                Trusted NABL certified labs
              </h3>

              <p className="mt-2">
                Hygienic & safety assured testing
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-5">
              <h3 className="text-2xl font-bold">
                Wide coverage across India
              </h3>

              <p className="mt-2">
                Most trusted service in 55+ cities
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-5">
              <h3 className="text-2xl font-bold">
                Home sample collection
              </h3>

              <p className="mt-2">
                Safe pickup at your doorstep
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-5">
              <h3 className="text-2xl font-bold">
                Fast, accurate reports
              </h3>

              <p className="mt-2">
                Doctor-verified, delivered on time
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}