import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Best offers",
    image: "/hero/popularcategory/img-1.avif",
    slug: "best-offers",
  },
  {
    title: "Vitamins & Supplements",
    image: "/hero/popularcategory/img-2.avif",
    slug: "vitamins-supplements",
  },
  {
    title: "Nutritional Drinks",
    image: "/hero/popularcategory/img-3.avif",
    slug: "nutritional-drinks",
  },
  {
    title: "Skin Care",
    image: "/hero/popularcategory/img-4.avif",
    slug: "skin-care",
  },
  {
    title: "Hair Care",
    image: "/hero/popularcategory/img-5.avif",
    slug: "hair-care",
  },
  {
    title: "Sexual Wellness",
    image: "/hero/popularcategory/img-6.avif",
    slug: "sexual-wellness",
  },
  {
    title: "Ayurveda Products",
    image: "/hero/popularcategory/img-7.avif",
    slug: "ayurveda",
  },
  {
    title: "Pain Relief",
    image: "/hero/popularcategory/img-8.avif",
    slug: "pain-relief",
  },
  {
    title: "Homeopathy",
    image: "/hero/popularcategory/img-9.avif",
    slug: "homeopathy",
  },
]

export default function PopularCategories() {
  return (
    <section className="mt-12 px-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Popular categories</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
        {categories.map((item) => (
          <Link
            key={item.title}
            href={`/category/${item.slug}`}
            className="
            bg-white
            border
            border-gray-100
            rounded-3xl
            p-3
            hover:shadow-xl
            hover:border-cyan-300
            transition
            group
            "
                >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="
                    w-full
                    h-[150px]
                    object-cover
                    rounded-2xl
                    group-hover:scale-105
                    duration-300
                "
              />
            </div>

            <h3 className="mt-4 text-center text-base font-semibold text-gray-800">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
