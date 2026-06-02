import Link from "next/link"
const sections = [
  {
    title: "Featured Herbs",
    items: [
      {
        name: "Ashwagandha",
        slug: "ashwagandha",
        image: "/hero/ayurveda/img-1.avif",
        description:
          "Ashwagandha is an important herb of the Ayurvedic system of medicine.",
      },
      {
        name: "Shilajit",
        slug: "shilajit",
        image: "/hero/ayurveda/img-2.webp",
        description:
          "Shilajit is a mineral based extract used for strength and energy.",
      },
      {
        name: "Giloy",
        slug: "giloy",
        image: "/hero/ayurveda/img-3.webp",
        description:
          "Giloy helps improve digestion and immunity naturally.",
      },
      {
        name: "Amla",
        slug: "amla",
        image: "/hero/ayurveda/img-4.jpg",
        description:
          "Amla is loaded with Vitamin C and antioxidants.",
      },
      {
        name: "Turmeric",
        slug: "turmeric",
        image: "/hero/ayurveda/img-5.jpg",
        description:
          "Turmeric is widely used in Ayurveda for healing.",
      },
    ],
  },

  {
    title: "Skin Care",
    items: [
      {
        name: "Aloe Vera",
        slug: "aloe-vera",
        image: "/hero/ayurveda/img-6.webp",
        description:
          "Aloe vera helps hydrate and heal skin naturally.",
      },
      {
        name: "Honey",
        slug: "honey",
        image: "/hero/ayurveda/img-7.jpeg",
        description:
          "Honey is rich in nutrients and improves skin glow.",
      },
      {
        name: "Coconut",
        slug: "coconut",
        image: "/hero/ayurveda/img-8.webp",
        description:
          "Coconut oil deeply nourishes skin and hair.",
      },
      {
        name: "Papaya",
        slug: "papaya",
        image: "/hero/ayurveda/img-9.jpeg",
        description:
          "Papaya contains enzymes beneficial for skin.",
      },
    ],
  },

  {
    title: "Digestive Care",
    items: [
      {
        name: "Ginger",
        slug: "ginger",
        image: "/hero/ayurveda/img-10.avif",
        description:
          "Ginger improves digestion and reduces bloating.",
      },
      {
        name: "Fennel Seeds",
        slug: "fennel-seeds",
        image: "/hero/ayurveda/img-11.webp",
        description:
          "Fennel seeds are commonly used for digestion.",
      },
      {
        name: "Licorice",
        slug: "licorice",
        image: "/hero/ayurveda/img-12.webp",
        description:
          "Licorice helps soothe stomach discomfort.",
      },
      {
        name: "Amla",
        slug: "amla",
        image: "/hero/ayurveda/img-4.jpg",
        description:
          "Amla improves metabolism and gut health.",
      },
    ],
  },
]

export default function AyurvedaPage() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen">

      <div className="max-w-[1800px] mx-auto px-10 py-10">

        {/* PAGE TITLE */}
        <div className="mb-12">

          <h1 className="text-6xl font-bold text-gray-900">
            Ayurveda Store
          </h1>

          <p className="text-2xl text-gray-600 mt-4">
            Explore Ayurvedic herbs, remedies, and wellness products
          </p>

        </div>

        {/* SECTIONS */}
        {sections.map((section, index) => (
          <div key={index} className="mb-16">

            {/* SECTION TITLE */}
            <h2 className="text-4xl font-bold mb-8">
              {section.title}
            </h2>

            {/* HORIZONTAL SCROLL */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">

              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all"
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[260px] object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5">

                    <h3 className="text-2xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                      {item.description}
                    </p>

                    <Link
  href={`/ayurveda/${item.slug}`}
  className="
    inline-block
    mt-4
    bg-green-600
    text-white
    px-6
    py-3
    rounded-xl
  "
>
  Explore
</Link>

                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}