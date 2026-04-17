"use client";

import RoomsButton from "./ui/RoomButton"
import { useState } from "react";
import BookingModal from "@/components/ui/modal/BookingModal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main id="home" className="relative min-h-screen flex flex-col items-center justify-center gap-8 bg-[url('https://images.unsplash.com/photo-1702814160779-4a88cfb330c7?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#04080a]"></div>
            <div className="relative flex flex-col items-center justify-center gap-8 z-10 px-4 mt-20">
                <div className="flex flex-col items-center justify-center h-full max-w-4xl text-center space-y-6">
                    <h2 className="text-sm md:text-base font-montserrat tracking-[0.3em] uppercase text-neutral-300">Welcome to Nancy</h2>
                    <h1 className="text-6xl md:text-[8rem] font-balkind text-white drop-shadow-2xl leading-tight">Grand Nancy Hotel</h1>
                    <p className="font-montserrat text-neutral-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Experience elegance and comfort with our exceptional service and amenities. A truly memorable stay awaits you.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-black px-10 py-3 rounded text-sm tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300"
                    >
                        Book Now
                    </button>
                    <RoomsButton />
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    )
}