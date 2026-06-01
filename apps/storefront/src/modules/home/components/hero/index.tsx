"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import Link from "next/link"
import { brands } from "@lib/data/brands"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  {
    image: "/hero/header/img-1.avif",
    title: "Making strides in cancer care",
    subtitle: "Get second opinion | Order medicines & book tests",
  },

  {
    image: "/hero/header/img-2.avif",
    title: "Healthcare at your fingertips",
    subtitle: "Order medicines online with fast delivery",
  },

  {
    image: "/hero/header/img-3.avif",
    title: "Trusted pharmacy platform",
    subtitle: "Lab tests, medicines & healthcare products",
  },
]

export default function HeroSlider() {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-cyan-50/40 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
          }}
          loop
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[260px] md:h-[420px] rounded-[32px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172acc] via-[#0f172a66] to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
                  <h2 className="text-4xl md:text-7xl leading-tight tracking-tight font-extrabold max-w-2xl">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-sm md:text-xl">{slide.subtitle}</p>

                  <button className="mt-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white w-fit px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300 shadow-xl">
                    Explore
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 px-4 lg:px-6">
        <h2 className="text-center text-lg md:text-2xl font-bold">
          Generic Medicine: India's Leading Online Pharmacy & Healthcare
          Platform
        </h2>
      </div>

      <div className="mt-8 px-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 inline-block pb-1">
            Shop by health concerns
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            {
              title: "Diabetes",
              slug: "diabetes",
              image: "/hero/concern/img-1.jpg",
            },

            {
              title: "Heart Care",
              slug: "heart-care",
              image: "/hero/concern/img-2.webp",
            },

            {
              title: "Stomach Care",
              slug: "stomach-care",
              image: "/hero/concern/img-3.jpg",
            },

            {
              title: "Liver Care",
              slug: "liver-care",
              image: "/hero/concern/img-4.jpg",
            },

            {
              title: "Bone Care",
              slug: "bone-care",
              image: "/hero/concern/img-5.webp",
            },

            {
              title: "Kidney Care",
              slug: "kidney-care",
              image: "/hero/concern/img-6.jpg",
            },

            {
              title: "Derma Care",
              slug: "derma-care",
              image: "/hero/concern/img-7.avif",
            },

            {
              title: "Respiratory",
              slug: "respiratory",
              image: "/hero/concern/img-8.jpg",
            },
          ].map((item, index) => (
            <Link
              href={`/health/${item.slug}`}
              key={index}
              className="bg-white backdrop-blur-xl rounded-3xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-0.5 duration-300 cursor-pointer border border-gray-100 hover:border-cyan-300 group"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[170px] md:h-[190px] object-cover rounded-xl group-hover:scale-105 duration-300"
                />
              </div>

              <h3 className="mt-4 text-sm md:text-base font-semibold text-center text-gray-800">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 inline-block pb-1">
            Featured Brands
          </h2>

          <button className="lg:flex bg-gradient-to-r from-cyan-500 to-teal-500 hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
            See all
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-5">
          {brands.map((brand) => (
            <Link
              key={brand.handle}
              href={`/brands/${brand.handle}`}
              className="bg-white backdrop-blur-xl rounded-3xl border border-gray-100 hover:border-cyan-300 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-1 flex items-center justify-center cursor-pointer"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-[140px] h-[120px] object-contain rounded-3xl p-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
