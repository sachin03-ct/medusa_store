"use client"

import { useEffect, useState } from "react"

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/prescriptions`, {
      credentials: "include",
      headers: {
        "x-publishable-api-key":
          process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
      },
    })
      .then((res) => {
        console.log("STATUS", res.status)
        return res.json()
      })
      .then((data) => {
        console.log("DATA", data)

        setPrescriptions(data.prescriptions || [])

        setLoading(false)
      })
      .catch((err) => {
        console.error(err)

        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="py-8">Loading prescriptions...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">My Prescriptions</h1>

      {prescriptions.length === 0 ? (
        <div className="border rounded-xl p-8 bg-white">
          <h3 className="font-semibold text-lg">No Prescriptions Found</h3>

          <p className="text-gray-500 mt-2">
            You haven't uploaded any prescriptions yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {prescriptions.map((p) => (
            <div
              key={p.id}
              className="
                border
                rounded-xl
                bg-white
                p-5
                shadow-sm
              "
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{p.prescription_id}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Uploaded on {new Date(p.created_at).toLocaleDateString()}
                  </p>
                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                    ${
                      p.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : p.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }
                  `}
                >
                  {p.status}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-medium">Prescription ID:</span>{" "}
                  {p.prescription_id}
                </p>

                {p.order_id && (
                  <p>
                    <span className="font-medium">Order ID:</span> {p.order_id}
                  </p>
                )}
              </div>
              <img
                src={`${
                  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
                }/admin/prescription-image/${p.image_url?.split("/").pop()}`}
                className="
                  w-24
                  h-24
                  object-cover
                  rounded-lg
                  cursor-pointer
                  hover:opacity-80
                "
                alt="Prescription"
                onClick={() =>
                  setSelectedImage(
                    `${
                      process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
                    }/admin/prescription-image/${p.image_url?.split("/").pop()}`
                  )
                }
              />

              {p.order_id && (
                <div className="mt-4 flex gap-3">
                  <a
                    href={`/account/orders`}
                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-blue-600
                      text-white
                      text-sm
                      font-medium
                    "
                  >
                    View Order
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed
            inset-0
            bg-black/80
            z-50
            flex
            items-center
            justify-center
            p-6
          "
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="
              absolute
              -top-12
              right-0
              bg-white
              px-4
              py-2
              rounded-lg
              font-medium
              "
            >
              ✕ Close
            </button>

            <img
              src={selectedImage}
              alt="Prescription"
              className="
          w-full
          max-h-[90vh]
          object-contain
          rounded-lg
          bg-white
        "
            />
          </div>
        </div>
      )}
    </div>
  )
}
