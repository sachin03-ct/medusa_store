"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function SuperSavingDeals() {
  const [products, setProducts] = useState<any[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products?limit=20&fields=*categories,*variants,+variants.calculated_price`,
        {
          headers: {
            "x-publishable-api-key":
              process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!,
          },
        }
      )

      const data = await res.json()

      const filteredProducts = data.products.filter((product: any) => {
        const price =
          product.variants?.[0]?.calculated_price?.calculated_amount || 0

        return price > 0 && price <= 500
      })

      setProducts(filteredProducts)
    } catch (error) {
      console.error(error)
    }
  }
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -1200,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 1200,
      behavior: "smooth",
    })
  }

  return (
    <section className="mt-12 px-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Super Saving Deals</h2>

        <LocalizedClientLink
          href="/store"
          className="
            bg-gradient-to-r
            from-cyan-500
            to-teal-500
            text-white
            px-4
            py-2
            rounded-lg
            text-sm
            font-medium
          "
        >
          See All
        </LocalizedClientLink>
      </div>

      <div className="relative">
        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-20
            bg-white
            shadow-xl
            rounded-full
            p-3
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* PRODUCTS */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-4
            overflow-x-auto
            no-scrollbar
            scroll-smooth
          "
        >
          {products.map((product) => {
            console.log("PRICE DATA", product.variants?.[0]?.calculated_price)
            const price =
              product.variants?.[0]?.calculated_price?.calculated_amount ||
              product.variants?.[0]?.calculated_price?.original_amount ||
              0

            return (
              <LocalizedClientLink
                key={product.id}
                href={`/health/${product.categories?.[0]?.handle}/${product.handle}`}
                className="
                    w-[260px]
                    min-w-[260px]
                    bg-white
                    border
                    rounded-2xl
                    p-4
                    hover:shadow-lg
                    transition
                    flex-shrink-0
                  "
                >
                <div className="h-[220px] overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.thumbnail || "/placeholder-product.png"}
                    alt={product.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    rounded-xl
                    hover:scale-105
                    duration-300
                  "
                />
                </div>

                <h3 className="mt-4 font-semibold line-clamp-2 text-base min-h-[50px]">
                  {product.title}
                </h3>

                <p className="mt-3 text-2xl font-bold text-cyan-600">
                  ₹{price}
                </p>
              </LocalizedClientLink>
            )
          })}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-20
            bg-white
            shadow-xl
            rounded-full
            p-3
          "
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  )
}
