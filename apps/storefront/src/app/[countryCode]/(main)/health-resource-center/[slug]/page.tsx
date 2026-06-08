type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function HealthResourcePage({
  params,
}: Props) {
  const { slug } = await params

  const title = slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ")

  if (slug === "all-diseases") {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">
          All Diseases
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Diabetes",
            "Blood Pressure",
            "Asthma",
            "Thyroid",
            "Fever",
            "Heart Care",
            "Kidney Care",
            "Liver Care",
          ].map((disease) => (
            <div
              key={disease}
              className="border rounded-xl p-4 bg-white shadow-sm"
            >
              {disease}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (
    slug ===
    "medicines-by-therapeutic-class"
  ) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Medicines By Therapeutic Class
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Antibiotics",
            "Pain Relief",
            "Diabetes Care",
            "Heart Care",
            "Vitamins",
            "Digestive Care",
            "Skin Care",
            "Respiratory Care",
          ].map((category) => (
            <div
              key={category}
              className="border rounded-xl p-4 bg-white shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-gray-600">
        Content coming soon.
      </p>
    </div>
  )
}