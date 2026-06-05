"use client"

import { addToCart } from "@lib/data/cart"
import { useState } from "react"

export default function AddToCartButton({
  variantId,
  quantity,
  countryCode,
}: {
  variantId: string
  quantity: number
  countryCode: string
}) {

  const [loading, setLoading] = useState(false)

  const handleAddToCart = async () => {

    try {

      setLoading(true)

      await addToCart({
        variantId,
        quantity,
        countryCode,
      })


    } catch (error) {

      console.log(error)

      alert("Failed to add product")

    } finally {

      setLoading(false)

    }

  }

  return (

    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl duration-300"
    >

      {loading ? "Adding..." : "Add to Cart"}

    </button>

  )
}