"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])

  const router = useRouter()

  // FETCH PRODUCTS
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products`,
          {
            headers: {
              "x-publishable-api-key":
                process.env
                  .NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
            },
          }
        )

        const data = await res.json()

        console.log(data)

        setProducts(data.products || [])

      } catch (error) {

        console.log(error)
      }
    }

    fetchProducts()

  }, [])

  // FILTER PRODUCTS
  useEffect(() => {

    if (!query) {

      setFilteredProducts([])

      return
    }

    const filtered = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(query.toLowerCase())
    )

    setFilteredProducts(filtered)

  }, [query, products])

  return (

    <div className="w-[40rem]">

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search medicines and healthcare products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-black bg-gray-100"
      />

      {/* DROPDOWN */}
      {filteredProducts.length > 0 && (

        <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-xl mt-2 z-50 max-h-[400px] overflow-y-auto">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              onClick={() => {

                setQuery("")

                router.push(`/health/${product.category}/${product.handle}`)
              }}
              className="p-4 hover:bg-gray-100 cursor-pointer border-b transition-all"
            >

              <h3 className="font-semibold text-lg">
                {product.title}
              </h3>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}