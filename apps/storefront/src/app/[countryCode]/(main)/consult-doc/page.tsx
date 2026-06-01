export default function ConsultDoctorsPage() {
  const features = [
    {
      icon: "⏰",
      title: "Talk within 30 min",
    },
    {
      icon: "💬",
      title: "Free follow up for 3 days",
    },
    {
      icon: "📄",
      title: "Get a valid prescription",
    },
  ]

  const benefits = [
    {
      icon: "🔒",
      title: "100% Confidential",
      description:
        "All advice & consultations are completely confidential. You can also delete chats whenever you want.",
    },
    {
      icon: "🏅",
      title: "Certified Doctors",
      description:
        "We offer quality healthcare through our network of certified and experienced doctors.",
    },
    {
      icon: "💊",
      title: "Convenience",
      description:
        "Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere.",
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description:
        "We provide medical assistance on non urgent queries at affordable prices.",
    },
  ]

  return (
    <div className="bg-[#f7f7f7] min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Online doctor consultation with qualified doctors
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mt-4">
              Starting at ₹199
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm"
                >
                  <span className="text-3xl">
                    {feature.icon}
                  </span>

                  <p className="font-medium">
                    {feature.title}
                  </p>
                </div>
              ))}

            </div>

            <button className="mt-10 bg-slate-500 hover:bg-slate-600 text-white px-8 py-4 rounded-xl text-lg md:text-xl font-semibold transition-all">
              Consult Now
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <img
              src="/hero/Consult/img-1.avif"
              alt="Doctor Consultation"
              className="w-full max-w-md lg:max-w-lg"
            />

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="bg-white border rounded-3xl shadow-sm">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-10">

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
                30L+
              </h2>

              <p className="text-lg md:text-2xl font-semibold mt-4">
                Total Consultations
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
                3K+
              </h2>

              <p className="text-lg md:text-2xl font-semibold mt-4">
                Daily Consultations
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
                22+
              </h2>

              <p className="text-lg md:text-2xl font-semibold mt-4">
                Specialities
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* HAPPY CUSTOMERS */}
      <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 md:px-6 lg:px-8">

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
          Our Happy Customers
        </h2>

        <div className="max-w-4xl mx-auto text-center mt-10">

          <p className="text-base md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            I installed the app and went for a free consultation with a
            dietician. The advice given was excellent. A detailed diet chart
            and exercise routine helped me improve my lifestyle without
            affecting my daily schedule.
          </p>

          <p className="mt-8 text-lg md:text-xl font-semibold">
            Aarohi
          </p>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-20">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition"
            >

              <div className="text-5xl md:text-6xl lg:text-7xl mb-6">
                {benefit.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">
                {benefit.title}
              </h3>

              <p className="text-base md:text-lg text-gray-600 mt-5 leading-relaxed">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}