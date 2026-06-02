"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function ProductImageViewer({
  images,
  title,
}: {
  images: {
    id: string
    url: string
  }[]
  title: string
}) {
  const [selectedImage, setSelectedImage] =
    useState(images?.[0]?.url || "")

  const [open, setOpen] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  if (!images?.length) {
    return (
                    <img
                        src=""
                        alt={title}
                        className="w-full h-[500px] object-contain"
                    />
                    )
                }
                    return (
                        <>
            <div className="flex gap-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-3">
                    {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.url}
                        onClick={() => setSelectedImage(image.url)}
                        className={`
                        w-16 h-16 rounded-lg border cursor-pointer
                        ${selectedImage === image.url
                            ? "border-red-500"
                            : "border-gray-200"}
                        `}
                    />
                    ))}
                </div>

                {/* Main Image */}
                <div
                    onClick={() => setOpen(true)}
                    className="
                        flex-1
                        h-[500px]
                        bg-white
                        border
                        border-gray-300
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        p-4
                    "
                    >
                    <img
                        src={selectedImage}
                        alt={title}
                        className="
                        max-w-[100%]
                        max-h-[100%]
                        object-contain
                        "
                    />
                </div>
            </div>

            {/* FULLSCREEN MODAL */}
            {open && (

                <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center p-4">

                    <button
                        onClick={() => {
                            setOpen(false)
                            setZoomed(false)
                        }}
                        className="fixed top-13 right-6 z-[999999] bg-black text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl border border-white/20"
                    >
                        <X size={32} strokeWidth={2.5} />
                    </button>

                    {/* IMAGE */}
                    <div className="overflow-auto max-h-full max-w-full rounded-2xl">
                        <img
                            src={selectedImage}
                            alt={title}
                            onDoubleClick={() => setZoomed(!zoomed)}
                            className={`
            rounded-2xl transition-transform duration-300 cursor-zoom-in
            ${zoomed ? "scale-[3]" : "scale-100"}
        `}
                        />
                    </div>

                </div>

            )}

        </>
    )
}