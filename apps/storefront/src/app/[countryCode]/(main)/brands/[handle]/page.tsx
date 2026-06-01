import { sdk } from "@lib/config"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function BrandPage({
  params,
}: {
  params: Promise<{
    handle: string
    countryCode: string
  }>
}) {
  const { handle, countryCode } =
    await params

  const { collections } =
    await sdk.store.collection.list({
      handle,
    })

  const collection = collections?.[0]

  if (!collection) {
    notFound()
  }

  const { products } =
    await sdk.store.product.list({
      collection_id: [collection.id],
      limit: 100,
    })

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        {collection.title}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/${countryCode}/products/${product.handle}`}
            className="border rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={
                product.thumbnail ||
                "/placeholder.png"
              }
              alt={product.title}
              className="w-full h-48 object-contain"
            />

            <h2 className="font-semibold mt-3">
              {product.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}