"use client"

import { MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function CurrentLocation() {

  const [location, setLocation] =
    useState("Detecting...")

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat = position.coords.latitude
        const lon = position.coords.longitude

        try {

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          )

          const data = await response.json()

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Pune"

          setLocation(city)

        } catch (error) {

          console.log(error)

          setLocation("Pune")
        }
      },

      () => {

        setLocation("Pune")
      }
    )

  }, [])

  return (

    <div className="hidden md:flex items-center gap-2 min-w-fit hover:bg-gray-100 cursor-pointer">

      <MapPin
        size={18}
        className="text-gray-600"
      />

      <span className="text-sm font-medium whitespace-nowrap">
        {location}
      </span>

    </div>
  )
}