const services = [
  { title: "Get Second Opinion", icon: "🩺" },
  { title: "Find Cancer Specialists", icon: "👨‍⚕️" },
  { title: "Buy Cancer Medicines", icon: "💊" },
  { title: "Financial Support", icon: "💰" },
  { title: "Book Tests", icon: "🧪" },
  { title: "Patient Support", icon: "❤️" },
]

const cancers = [
  "Breast Cancer",
  "Blood Cancer",
  "Colon Cancer",
  "Prostate Cancer",
  "Lung Cancer",
  "Kidney Cancer",
  "Cervical Cancer",
  "Skin Cancer",
]

export default function CancerCarePage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-pink-100">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">

          <div className="grid lg:grid-cols-2 items-center gap-10">

            {/* LEFT */}
            <div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Conquer Cancer
              </h1>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 md:mt-4">
                with Hope & Care
              </h2>

              <p className="text-base md:text-xl lg:text-2xl text-gray-700 mt-6 md:mt-8 leading-relaxed">
                Access quality cancer care, specialist doctors,
                financial support, and patient programs —
                all in one place.
              </p>

              <button className="mt-8 md:mt-10 bg-slate-500 hover:bg-slate-700 text-white px-6 md:px-10 py-3 md:py-5 rounded-2xl text-lg md:text-xl font-semibold transition-all">
                Explore Cancer Care
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">

              <img
                src="/hero/Cancer/img-1.avif"
                alt="Cancer Care"
                className="rounded-3xl w-full max-w-md lg:max-w-[600px] shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#f6eee2] rounded-2xl p-4 md:p-6 text-center hover:shadow-xl transition-all"
            >

              <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">
                {service.icon}
              </div>

              <h3 className="text-sm md:text-lg lg:text-xl font-semibold leading-snug">
                {service.title}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* CANCER TYPES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-20">

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
          Major Types of Cancer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">

          {cancers.map((cancer) => (
            <div
              key={cancer}
              className="bg-[#cfe5df] rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all"
            >

              <div className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6">
                🎗️
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                {cancer}
              </h3>

              <div className="mt-8 flex flex-col gap-3">

                <button className="bg-white hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold transition-all">
                  About
                </button>

                <button className="bg-white hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold transition-all">
                  Support Programs
                </button>

                <button className="bg-white hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold transition-all">
                  NGOs
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* SUPPORT SECTION */}
      <section className="bg-white py-12 md:py-20">

        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Access Quality Cancer Care
          </h2>

          <p className="text-base md:text-xl lg:text-2xl text-gray-600 mt-6 md:mt-8 leading-relaxed max-w-4xl mx-auto">
            We are here to support patients and families with
            consultations, medicine delivery, diagnostics,
            emotional support, and financial assistance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">

            <div className="bg-pink-50 p-6 md:p-10 rounded-3xl">

              <div className="text-5xl md:text-6xl lg:text-7xl">
                🏥
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6">
                Hospital Support
              </h3>

            </div>

            <div className="bg-pink-50 p-6 md:p-10 rounded-3xl">

              <div className="text-5xl md:text-6xl lg:text-7xl">
                💊
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6">
                Medicine Access
              </h3>

            </div>

            <div className="bg-pink-50 p-6 md:p-10 rounded-3xl">

              <div className="text-5xl md:text-6xl lg:text-7xl">
                🤝
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6">
                Patient Programs
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING CALL BUTTON */}

      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">

        <button className="bg-slate-500 hover:bg-slate-600 text-white px-4 md:px-8 py-3 md:py-5 rounded-full shadow-2xl text-sm md:text-xl font-bold flex items-center gap-2 md:gap-4 transition-all">
          📞 1800-102-1618
        </button>

      </div>

    </div>
  )
}