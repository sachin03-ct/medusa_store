import { listProducts } from "@lib/data/products"
import { sdk } from "@lib/config"
import Link from "next/link"

export default async function HealthPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {

  const { category } = await params

  // GET CATEGORY
  const { product_categories } =
    await sdk.store.category.list({
      handle: category,
    })

  const selectedCategory = product_categories[0]

  if (!selectedCategory) {
    return (
      <div className="p-10 text-3xl">
        No category found
      </div>
    )
  }

  // GET PRODUCTS
  const {
    response: { products },
  } = await listProducts({
    countryCode: "in",
    queryParams: {
      category_id: [selectedCategory.id],
    },
  })

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white">

      <h1 className="text-4xl font-bold capitalize mb-10">
        {selectedCategory.name} Medicines
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => {

          console.log("PRODUCT HANDLE:", product.handle)

          return (
            <Link
              key={product.id}
              href={`/health/${category}/${product.handle}`}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl duration-300 overflow-hidden border border-gray-100 group"
            >

              <img
                src={product.thumbnail || ""}
                alt={product.title}
                className="w-full h-[280px] object-cover group-hover:scale-105 duration-300"
              />

              <div className="p-4">

                <h2 className="text-xl font-semibold">
                  {product.title}
                </h2>
                <div className="flex items-center gap-2 mt-3">

                  <div className="flex text-yellow-400 text-lg">
                    ★★★★☆
                  </div>

                  <span className="text-sm text-gray-500">
                    4.3 (128 reviews)
                  </span>

                </div>

                <p className="text-cyan-600 font-bold text-2xl mt-2">
                  ₹
                  {product.variants?.[0]?.calculated_price?.calculated_amount || 0}
                </p>

                <button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-2xl">
                  Add to Cart
                </button>

              </div>

            </Link>
          )
        })}

      </div>

    </div>
  )
}