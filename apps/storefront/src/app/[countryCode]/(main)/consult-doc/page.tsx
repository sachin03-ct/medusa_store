export default function ConsultDoctorsPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-6xl font-bold leading-tight text-gray-900">
              Online doctor consultation with qualified doctors
            </h1>

            <p className="text-3xl text-gray-600 mt-4">
              Starting at ₹199
            </p>

            {/* FEATURES */}
            <div className="flex gap-10 mt-10 flex-wrap">

              <div className="flex items-center gap-3">
                <span className="text-3xl">⏰</span>
                <p className="text-lg">Talk within 30 min</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">💬</span>
                <p className="text-lg">Free follow up for 3 days</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">📄</span>
                <p className="text-lg">Get a valid prescription</p>
              </div>

            </div>

            {/* BUTTON */}
            <button className="mt-10 bg-slate-500 hover:bg-slate-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all">
              Consult now
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <img
              src="https://img.freepik.com/free-vector/doctor-online-concept_52683-37473.jpg"
              alt="doctor"
              className="w-[500px]"
            />

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="max-w-5xl mx-auto bg-white border rounded-2xl shadow-sm">

        <div className="grid grid-cols-3 text-center py-12">

          <div>
            <h2 className="text-6xl font-bold text-slate-800">
              30L+
            </h2>

            <p className="text-3xl font-semibold mt-4">
              Total Consultations
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-bold text-slate-800">
              3k+
            </h2>

            <p className="text-3xl font-semibold mt-4">
              Daily Consultations
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-bold text-slate-800">
              22+
            </h2>

            <p className="text-3xl font-semibold mt-4">
              Specialities
            </p>
          </div>

        </div>

      </section>

      {/* HAPPY CUSTOMERS */}
      <section className="max-w-7xl mx-auto py-20 px-8">

        <h2 className="text-6xl font-bold text-center">
          Our Happy Customers
        </h2>

        <div className="max-w-4xl mx-auto text-center mt-12">

          <p className="text-2xl text-gray-600 leading-relaxed">
            I installed the app and went for a free consultation with a dietician.
            The advice given by Dr. Mirza was simply great. He shared a detailed
            diet chart and exercises with me which was easy to incorporate into my hectic schedule.
          </p>

          <p className="mt-8 text-xl font-semibold">
            Aarohi
          </p>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="grid grid-cols-4 gap-10 text-center">

          {/* CARD */}
          <div>

            <div className="text-7xl mb-6">
              🔒
            </div>

            <h3 className="text-4xl font-bold">
              100% Confidential
            </h3>

            <p className="text-xl text-gray-600 mt-5 leading-relaxed">
              All advice & consultations are completely confidential.
              You can also delete chats whenever you want.
            </p>

          </div>

          {/* CARD */}
          <div>

            <div className="text-7xl mb-6">
              🏅
            </div>

            <h3 className="text-4xl font-bold">
              Certified Doctors
            </h3>

            <p className="text-xl text-gray-600 mt-5 leading-relaxed">
              We offer quality healthcare through our network
              of certified and experienced doctors.
            </p>

          </div>

          {/* CARD */}
          <div>

            <div className="text-7xl mb-6">
              💊
            </div>

            <h3 className="text-4xl font-bold">
              Convenience
            </h3>

            <p className="text-xl text-gray-600 mt-5 leading-relaxed">
              Forget the hassle of long queues and rush hour.
              Seek expert opinion anytime, anywhere.
            </p>

          </div>

          {/* CARD */}
          <div>

            <div className="text-7xl mb-6">
              💰
            </div>

            <h3 className="text-4xl font-bold">
              Cost Effective
            </h3>

            <p className="text-xl text-gray-600 mt-5 leading-relaxed">
              We provide medical assistance on non urgent queries
              for free. Fee starting at ₹50.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}