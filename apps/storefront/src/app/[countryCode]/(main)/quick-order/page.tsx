"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  customer: any
}

export default function QuickOrderPage({
  customer,
}: Props) {
  const router = useRouter()

  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [showLoginPopup, setShowLoginPopup] =
    useState(false)

  const handleSubmit = async () => {

    // FILE CHECK
    if (!file) {
      alert("Please upload a prescription")
      return
    }

    // NAME CHECK
    if (!name || !phone) {
      alert("Please enter name and phone number")
      return
    }

    // PHONE CHECK
    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit phone number")
      return
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/upload-prescription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-publishable-api-key":
              process.env
                .NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
          },
          body: JSON.stringify({
            name,
            phone,
            fileName: file.name,
            customer_id: customer.id,
            customer_email: customer.email,
          }),
        }
      )

      const data = await res.json()

      if (data.success) {
        setShowSuccess(true)

        setName("")
        setPhone("")
        setFile(null)

        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        alert("Failed to submit prescription")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }
  }
  console.log("CUSTOMER:", customer)
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-3">
          Upload Prescription
        </h1>

        <p className="text-gray-600 mb-8">
          Upload your prescription and our team
          will arrange your medicines.
        </p>

        {/* Upload Box */}
        {/* Upload Box */}
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
    onClick={(e) => {
      if (!customer) {
        e.preventDefault()

        setShowLoginPopup(true)

        setTimeout(() => {
          router.push("/account")
        }, 2000)
      }
    }}
    onChange={(e) =>
      setFile(e.target.files?.[0] || null)
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
</div>

        {/* Customer Details */}
        <div className="mt-8 bg-white rounded-3xl p-8 shadow-sm">
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
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold"
            >
              Submit Prescription
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999]">
          <div className="bg-white rounded-3xl p-10 text-center">
            <div className="text-7xl">✅</div>

            <h2 className="text-3xl font-bold mt-4">
              Prescription Uploaded Successfully
            </h2>
          </div>
        </div>
      )}

      {/* LOGIN POPUP */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999]">
          <div className="bg-white rounded-3xl p-8 text-center shadow-2xl w-[450px]">
            <div className="text-6xl mb-4">
              🔒
            </div>

            <h2 className="text-2xl font-bold">
              Please Sign In
            </h2>

            <p className="mt-3 text-gray-600">
              You must be logged in to upload a
              prescription.
            </p>

            <p className="mt-2 text-cyan-600">
              Redirecting to login page...
            </p>
          </div>
        </div>
      )}
    </div>
  )
}