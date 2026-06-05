"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    name: "Health Resource Center",
    items: [
      { name: "All Diseases", slug: "/all-diseases" },
      { name: "All Medicines", slug: "/store" },
      { name: "Medicines by Therapeutic Class", slug: "/drugs-therapeutic-classes" },
    ],
  },
  {
    name: "Hair Care",
    items: [
      { name: "Hair Oil", slug: "/hair-care/oil" },
      { name: "Shampoo", slug: "/hair-care/shampoo" },
      { name: "Conditioner", slug: "/hair-care/conditioner" },
      { name: "Hair Serum", slug: "/hair-care/serum" },
    ],
  },
  {
    name: "Fitness & Health",
    items: [
      { name: "Protein", slug: "/fitness/protein" },
      { name: "Weight Gain", slug: "/fitness/weight-gain" },
      { name: "Weight Loss", slug: "/fitness/weight-loss" },
    ],
  },
  {
    name: "Sexual Wellness",
    items: [
      { name: "Men's Wellness", slug: "/sexual-wellness/men" },
      { name: "Women's Wellness", slug: "/sexual-wellness/women" },
    ],
  },
  {
    name: "Vitamins & Nutrition",
    items: [
      { name: "Vitamin C", slug: "/vitamins/c" },
      { name: "Vitamin D", slug: "/vitamins/d" },
      { name: "Multivitamins", slug: "/vitamins/multi" },
    ],
  },
  {
    name: "Supports & Braces",
    items: [
      { name: "Knee Support", slug: "/supports/knee" },
      { name: "Back Support", slug: "/supports/back" },
      { name: "Neck Support", slug: "/supports/neck" },
    ],
  },
  {
    name: "Immunity Boosters",
    items: [
      { name: "Chyawanprash", slug: "/immunity/chyawanprash" },
      { name: "Giloy", slug: "/immunity/giloy" },
      { name: "Tulsi", slug: "/immunity/tulsi" },
    ],
  },
  {
    name: "Homeopathy",
    items: [
      { name: "Homeopathic Medicines", slug: "/homeopathy" },
    ],
  },
  {
    name: "Pet Care",
    items: [
      { name: "Dog Care", slug: "/pet-care/dogs" },
      { name: "Cat Care", slug: "/pet-care/cats" },
    ],
  },
]

export default function CategoryNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <div className="bg-white border-b relative z-50">
      <div className="max-w-[1800px] mx-auto px-6">

        <div className="flex items-center justify-center gap-10">

          {categories.map((category) => (
            <div
              key={category.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(category.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className="
                  flex
                  items-center
                  py-2
                  text-sm
                  font-medium
                  whitespace-nowrap
                  hover:text-cyan-600
                  transition
                "
              >
                {category.name}
                <ChevronDown
                  size={14}
                  className={
                  activeMenu === category.name
                    ? "transition-transform rotate-180"
                    : "transition-transform"
                }
                />
              </button>

              {activeMenu === category.name && (
                <div
                  className="
                    absolute
                    left-0
                    bg-white
                    rounded-xl
                    shadow-2xl
                    border
                    min-w-[280px]
                    z-[99999]
                  "
                >
                  {category.items.map((item) => (
                    <LocalizedClientLink
                      key={item.name}
                      href={item.slug}
                      className="
                        block
                        px-5
                        py-3
                        text-sm
                        hover:text-cyan-600
                        transition
                      "
                    >
                      {item.name}
                    </LocalizedClientLink>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}