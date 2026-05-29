"use client"

import { useState } from "react"

import AddToCartButton from
"./add-to-cart-button"

export default function MedicineVariantSelector({
  variants,
  countryCode,
}: any) {

  const [selectedVariant, setSelectedVariant] =
    useState(variants[0])

  const [quantity, setQuantity] =
    useState(1)

  const inventoryQuantity =
  selectedVariant?.inventory_quantity || 0
  
  const inStock =
    inventoryQuantity > 0

  const price =
    selectedVariant?.calculated_price
      ?.calculated_amount || 0

  return (

    <div>

      {/* PRICE */}
      <div className="mt-5 flex items-center gap-3 flex-wrap">

        <span className="text-4xl font-bold text-gray-900">
          ₹{price}
        </span>

        <span className="text-green-600 font-semibold">
          38% OFF
        </span>

      </div>

      {/* VARIANTS */}
      <div className="mt-6">

        <span className="font-medium">
          Pack Size
        </span>

        <select
          className="border rounded-xl px-4 py-2 bg-white mt-2"

          onChange={(e) => {

            const variant = variants.find(
              (v: any) =>
                v.id === e.target.value
            )

            setSelectedVariant(variant)
          }}
        >

          {variants.map((variant: any) => (

            <option
              key={variant.id}
              value={variant.id}
            >
              {variant.title}
            </option>

          ))}

        </select>

      </div>

      {/* STOCK */}
      <p
        className={`mt-4 font-semibold ${
          inStock
            ? "text-green-600"
            : "text-red-600"
        }`}
      >

        {inStock
          ? "In Stock"
          : "Out of Stock"}

      </p>

      {/* QUANTITY */}
      <div className="mt-6 flex items-center gap-4">

        <span className="font-medium">
          Quantity
        </span>

        <select
          className="border rounded-xl px-4 py-2 bg-white"

          disabled={!inStock}

          value={quantity}

          onChange={(e) =>
            setQuantity(
              Number(e.target.value)
            )
          }
        >

          {Array.from(
            {
              length: 10,
            },
            (_, i) => (

              <option
                key={i + 1}
                value={i + 1}
              >
                {i + 1}
              </option>

            )
          )}

        </select>

      </div>

      {/* BUTTON */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        {inStock ? (

          <AddToCartButton
            variantId={selectedVariant.id}
            quantity={quantity}
            countryCode={countryCode}
          />

        ) : (

          <button
            disabled
            className="bg-gray-300 text-gray-500 px-6 py-3 rounded-xl cursor-not-allowed"
          >
            Out of Stock
          </button>

        )}

      </div>

    </div>

  )
}