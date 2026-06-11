"use client"

import { useState } from "react"

export default function QuickOrderPage() {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a prescription")
      return
    }

    if (!name && !email && !phone && !address) {
  alert(
  "Please enter name, email, phone and address"
)
  return
}

    setLoading(true)

    const formData = new FormData()

    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("file", file)
    formData.append("address", address)

    try {
      const res = await fetch(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/upload-prescription`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
        },
        body: formData,
      }
    )

      const data = await res.json()

      if (data.success) {
        setShowSuccess(true)

        setName("")
        setEmail("")
        setPhone("")
        setFile(null)

        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        alert(data.message || "Failed to submit prescription")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }
return (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-3">
        Upload Prescription
      </h1>

      <p className="text-gray-600 mb-8">
        Upload your prescription and our team will arrange your medicines.
      </p>

      {/* STEP 1 */}
      {step === 1 && (
        <div
          className="
            border-2
            border-dashed
            border-gray-300
            rounded-3xl
            p-12
            bg-white
            text-center
          "
        >
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] || null
              )
            }
          />

          {file && (
            <div className="mt-4">
              <p className="text-green-600 font-medium">
                Selected File:
              </p>

              <p>{file.name}</p>
            </div>
          )}

          <button
            onClick={() => {
              if (!file) {
                alert(
                  "Please select a prescription"
                )
                return
              }

              setStep(2)
            }}
            className="
              mt-6
              px-8
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-semibold
            "
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">
            Customer Details
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Full Name"
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
              placeholder="Email Address"
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
              onChange={(e) =>
                setPhone(e.target.value)
              }
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
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Address"
              rows={4}
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

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="
                  flex-1
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  font-semibold
                "
              >
                Back
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                  flex-1
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  hover:opacity-90
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {loading ? (
                  <>
                    <div
                      className="
                        h-5
                        w-5
                        border-2
                        border-white
                        border-t-transparent
                        rounded-full
                        animate-spin
                      "
                    />
                    Uploading...
                  </>
                ) : (
                  "Submit Prescription"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    {showSuccess && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999]">
        <div className="bg-white rounded-3xl p-10 w-[550px] max-w-[90%] text-center shadow-2xl">
          <div className="text-7xl mb-5">
            ✅
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Prescription Uploaded Successfully
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Thank you for choosing Generic Medicine Store.
            <br />
            Our pharmacist will review your prescription
            and contact you shortly.
          </p>

          <button
            onClick={() =>
              setShowSuccess(false)
            }
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
            "
          >
            OK
          </button>
        </div>
      </div>
    )}
  </div>
)
}