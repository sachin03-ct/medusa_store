const sections = [
  {
    title: "Featured Herbs",
    items: [
      {
        name: "Ashwagandha",
        image:
          "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/en_US/Articles/Menopause/ashwagandha/hero-image-2x.png?auto=format",
        description:
          "Ashwagandha is an important herb of the Ayurvedic system of medicine.",
      },
      {
        name: "Shilajit",
        image:
          "https://maharishiayurvedaindia.com/cdn/shop/articles/shilajit_benefits_for_women_4b69db46-9ab2-4b9f-b4e9-8a602e827eea.jpg?v=1759124541",
        description:
          "Shilajit is a mineral based extract used for strength and energy.",
      },
      {
        name: "Giloy",
        image:
          "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/31073622/giloy-benefits.webp",
        description:
          "Giloy helps improve digestion and immunity naturally.",
      },
      {
        name: "Amla",
        image:
          "https://m.media-amazon.com/images/I/61gRfOuOWxL._AC_UF1000,1000_QL80_.jpg",
        description:
          "Amla is loaded with Vitamin C and antioxidants.",
      },
      {
        name: "Turmeric",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRFqxsL6aknS5pop5JvDkv8CusFG0xUxpNA&s",
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
        image:
          "https://www.therascience.com/media/wysiwyg/Aloe_vera_370x425.jpg",
        description:
          "Aloe vera helps hydrate and heal skin naturally.",
      },
      {
        name: "Honey",
        image:
          "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
        description:
          "Honey is rich in nutrients and improves skin glow.",
      },
      {
        name: "Coconut",
        image:
          "https://www.paperandtea.com/cdn/shop/articles/Kokosnuss_00dc9916-deb3-4cfe-8151-107fc85f6136.jpg?v=1756478271&width=1024",
        description:
          "Coconut oil deeply nourishes skin and hair.",
      },
      {
        name: "Papaya",
        image:
          "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe",
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
        image:
          "https://assets.unileversolutions.com/v1/136050829.jpg",
        description:
          "Ginger improves digestion and reduces bloating.",
      },
      {
        name: "Fennel Seeds",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2025/6/521174449/JU/JU/WK/241608515/organic-fennel-seeds-500x500.jpeg",
        description:
          "Fennel seeds are commonly used for digestion.",
      },
      {
        name: "Licorice",
        image:
          "https://ik.imagekit.io/pon54xoks/licorice-extract%20(2).jpg",
        description:
          "Licorice helps soothe stomach discomfort.",
      },
      {
        name: "Amla",
        image:
          "https://m.media-amazon.com/images/I/61gRfOuOWxL._AC_UF1000,1000_QL80_.jpg",
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

                    <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl text-lg font-semibold transition-all">
                      Explore
                    </button>

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