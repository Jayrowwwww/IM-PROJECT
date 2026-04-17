"use client"

import { useState } from "react";
import BookingModal from "@/components/ui/modal/BookingModal";

export default function BookButton(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            <button onClick={() => setIsModalOpen(true)} 
                className="bg-white/20 border-2 border-white/70 backdrop-blur text-white px-10 py-3 rounded text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                Book Now
            </button>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}