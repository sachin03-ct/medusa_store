const services = [
  {
    title: "Get Second Opinion",
    icon: "🩺",
  },
  {
    title: "Find Cancer Specialists",
    icon: "👨‍⚕️",
  },
  {
    title: "Buy Cancer Medicines",
    icon: "💊",
  },
  {
    title: "Financial Support",
    icon: "💰",
  },
  {
    title: "Book Tests",
    icon: "🧪",
  },
  {
    title: "Patient Support",
    icon: "❤️",
  },
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

        <div className="max-w-7xl mx-auto px-10 py-16">

          <div className="grid grid-cols-2 items-center gap-10">

            {/* LEFT */}
            <div>

              <h1 className="text-7xl font-bold text-black leading-tight">
                Conquer Cancer
              </h1>

              <h2 className="text-6xl font-semibold mt-4">
                with Hope & Care
              </h2>

              <p className="text-2xl text-gray-700 mt-8 leading-relaxed">
                Access quality cancer care, specialist doctors,
                financial support, and patient programs —
                all in one place.
              </p>

              <button className="mt-10 bg-slate-500 hover:bg-slate-700 text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition-all">
                Explore Cancer Care
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">

              <img
                src="https://img.freepik.com/free-photo/woman-with-cancer-her-daughter_23-2148962351.jpg"
                alt="Cancer Care"
                className="rounded-3xl w-full max-w-[600px] shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f6eee2] rounded-2xl p-6 text-center hover:shadow-xl transition-all"
            >

              <div className="text-6xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold leading-snug">
                {service.title}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* MAJOR CANCERS */}
      <section className="max-w-8xl mx-auto px-10 pb-20">

        <h2 className="text-6xl font-bold mb-12">
          Major Types of Cancer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cancers.map((cancer, index) => (
            <div
              key={index}
              className="bg-[#cfe5df] rounded-3xl p-8 hover:shadow-2xl transition-all"
            >

              <div className="text-7xl mb-6">
                🎗️
              </div>

              <h3 className="text-3xl font-bold text-gray-800">
                {cancer}
              </h3>

              <div className="mt-10 flex flex-col gap-4">

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
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-10 text-center">

          <h2 className="text-6xl font-bold">
            Access Quality Cancer Care
          </h2>

          <p className="text-2xl text-gray-600 mt-8 leading-relaxed">
            We are here to support patients and families with
            consultations, medicine delivery, diagnostics,
            emotional support, and financial assistance.
          </p>

          <div className="grid grid-cols-3 gap-10 mt-16">

            <div className="bg-pink-50 p-10 rounded-3xl">
              <div className="text-7xl">🏥</div>

              <h3 className="text-3xl font-bold mt-6">
                Hospital Support
              </h3>
            </div>

            <div className="bg-pink-50 p-10 rounded-3xl">
              <div className="text-7xl">💊</div>

              <h3 className="text-3xl font-bold mt-6">
                Medicine Access
              </h3>
            </div>

            <div className="bg-pink-50 p-10 rounded-3xl">
              <div className="text-7xl">🤝</div>

              <h3 className="text-3xl font-bold mt-6">
                Patient Programs
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* FLOATING SUPPORT BUTTON */}
      <div className="fixed bottom-8 right-8">

        <button className="bg-slate-500 hover:bg-slate-600 text-white px-8 py-5 rounded-full shadow-2xl text-2xl font-bold flex items-center gap-4 transition-all">
          📞 1800-102-1618
        </button>

      </div>

    </div>
  )
}