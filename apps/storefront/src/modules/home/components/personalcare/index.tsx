import Image from "next/image"
const personalCare = [
  {
    title: "Skin Care",
    slug: "/skin-care",
    image: "hero/personalcare/img-1.avif",
  },
  {
    title: "Hair Care",
    image: "hero/personalcare/img-2.jpg",
  },
  {
    title: "Oral Care",
    image: "hero/personalcare/img-3.avif",
  },
  {
    title: "Elderly Care",
    image: "hero/personalcare/img-4.webp",
  },
  {
    title: "Baby Care",
    image: "hero/personalcare/img-5.jpg",
  },
  {
    title: "Women Care",
    image: "hero/personalcare/img-6.webp",
  },
  {
    title: "Men Grooming",
    image: "hero/personalcare/img-7.avif",
  },
  {
    title: "Pet Care",
    image: "hero/personalcare/img-8.webp",
  },
]

export default function PersonalCareSection() {
  return (
    <section className="mt-12 px-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Personal Care
        </h2>

        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
          See all
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {personalCare.map((item) => (
          <div
            key={item.title}
            className="
        bg-white
        rounded-3xl
        p-3
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-0.5
        duration-300
        cursor-pointer
        border
        border-gray-100
        hover:border-cyan-300
        group
      "
          >
            <div
              className={`
                overflow-hidden
                rounded-2xl
                h-[170px]
                md:h-[190px]
            `}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-105
                duration-300
                "
              />
            </div>

            <h3
              className="
          mt-4
          text-sm
          md:text-base
          font-semibold
          text-center
          text-gray-800
        "
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
