"use client"

import { useState } from "react"

export default function ContactUsPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            "x-publishable-api-key":
              process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      )

      const data = await res.json()

      if (data.success) {
        setShowSuccess(true)

        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)

        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      console.error(error)

      alert("Something went wrong")
    }

    setLoading(false)
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>

          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from you. Send us your questions or feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            <div className="space-y-5">
              <div>
                <p className="font-semibold">📍 Address</p>

                <p className="text-gray-600">Bavdhan, Pune, Maharashtra</p>
              </div>

              <div>
                <p className="font-semibold">📞 Phone</p>

                <p className="text-gray-600">+91 9876543210</p>
              </div>

              <div>
                <p className="font-semibold">✉️ Email</p>

                <p className="text-gray-600">
                  support@genericmedicinestore.com
                </p>
              </div>

              <div>
                <p className="font-semibold">🕒 Working Hours</p>

                <p className="text-gray-600">24/7 Customer Support</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Write your message..."
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  p-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-4
                rounded-xl
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    {/* SUCCESS POPUP */}
{showSuccess && (
  <div
    className="
      fixed
      inset-0
      bg-black/50
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-[99999]
    "
  >
    <div
      className="
        bg-white
        rounded-3xl
        p-10
        w-[500px]
        max-w-[90%]
        text-center
        shadow-2xl
        animate-in
        zoom-in-95
        duration-300
      "
    >
      <div className="text-7xl mb-5">
        🎉
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        Thank You!
      </h2>

      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        Thank you for contacting us.
        <br />
        Your message has been received successfully.
        <br />
        Our team will get back to you shortly.
      </p>

      <button
        onClick={() => setShowSuccess(false)}
        className="
          mt-8
          px-8
          py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          font-semibold
          hover:opacity-90
        "
      >
        Close
      </button>
    </div>
  </div>
)}
  </div>
)
}
