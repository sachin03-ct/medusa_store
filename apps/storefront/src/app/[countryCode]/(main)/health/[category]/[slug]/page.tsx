import Link from "next/link"
import { sdk } from "@lib/config"
import MedicineVariantSelector from "@modules/medicine/components/MedicineVariantSelector"
import ProductImageViewer from "@modules/medicine/components/product-image-viewer"

export default async function MedicinePage({
  params,
}: {
  params: Promise<{
    category: string
    slug: string
  }>
}) {

  const { category, slug } = await params

  const { products } =
    await sdk.store.product.list({
      handle: slug,
      fields:
        "*variants.calculated_price,+variants.inventory_quantity",
    })

  const medicine = products[0]


  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Medicine not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white px-4 py-10">

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto mb-8">

        <div className="flex items-center gap-2 text-sm md:text-base text-gray-500">

          <Link href="/" className="hover:text-cyan-600">
            Home
          </Link>

          <span>/</span>

          <Link
            href={`/health/${category}`}
            className="hover:text-cyan-600 capitalize"
          >
            {category.replace("-", " ")}
          </Link>

          <span>/</span>

          <span className="text-gray-800 font-medium">
            {medicine.title}
          </span>

        </div>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="bg-white rounded-3xl shadow-lg p-5 sticky top-24 h-fit">

          <div className="bg-white rounded-3xl shadow-lg p-5 sticky top-24 h-fit">

            <ProductImageViewer
              image={medicine.thumbnail || ""}
              title={medicine.title}
            />

          </div>

        </div>
        {/* DETAILS */}
        <div className="flex flex-col self-start  top-24">

          <span className="w-fit px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-medium capitalize">

            {category.replace("-", " ")}

          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-5">

            {medicine.title}

          </h1>


          <p className="mt-6 text-gray-600 text-lg leading-8">

            {medicine.description || "No description available."}

          </p>

          <MedicineVariantSelector
            variants={medicine.variants}
            countryCode="in"
          />

          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-5">

            <h3 className="font-bold text-lg mb-3">
              Available Offers
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">

              <li>✅ 10% Instant Discount on UPI</li>
              <li>✅ Free delivery on orders above ₹499</li>
              <li>✅ Cashback up to ₹100</li>

            </ul>

          </div>

          <div className="mt-8">

            <h3 className="font-bold text-xl mb-4">
              Product Highlights
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white p-4 rounded-2xl border">
                💊 Genuine Medicine
              </div>

              <div className="bg-white p-4 rounded-2xl border">
                🧪 Quality Tested
              </div>

              <div className="bg-white p-4 rounded-2xl border">
                🚚 Fast Delivery
              </div>

              <div className="bg-white p-4 rounded-2xl border">
                🔒 Secure Payment
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}