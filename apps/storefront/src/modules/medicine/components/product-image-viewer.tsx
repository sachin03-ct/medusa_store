"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function ProductImageViewer({
    image,
    title,
}: {
    image: string
    title: string
}) {

    const [open, setOpen] = useState(false)
    const [zoomed, setZoomed] = useState(false)

    return (
        <>

            {/* MAIN IMAGE */}
            <div
                onClick={() => setOpen(true)}
                className="overflow-hidden rounded-2xl cursor-zoom-in"
            >

                <img
                    src={image}
                    alt={title}
                    className="w-full h-[350px] md:h-[500px] lg:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                />

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
                            src={image}
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