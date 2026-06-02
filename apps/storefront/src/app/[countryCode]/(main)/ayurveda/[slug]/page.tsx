import { herbs } from "@lib/data/ayurveda"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function HerbPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {

  const { slug } = await params

  const herb = herbs.find(
    (item) => item.slug === slug
  )

  if (!herb) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-7xl mx-auto p-10">

        <Link
          href="/ayurveda"
          className="text-green-600"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-8">

          <div className="bg-gray-50 rounded-3xl p-8">

            <img
              src={herb.image}
              alt={herb.name}
              className="
                w-full
                h-[600px]
                object-contain
              "
            />

          </div>

          <div>

            <h1 className="text-5xl font-bold">
              {herb.name}
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              {herb.description}
            </p>

            <h2 className="mt-8 text-2xl font-bold">
              Benefits
            </h2>

            <ul className="mt-4 space-y-3">

              {herb.benefits.map((benefit) => (
                <li key={benefit}>
                  ✅ {benefit}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>
  )
}