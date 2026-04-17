"use client";

import { useState } from "react";
import BookingModal from "@/components/ui/modal/BookingModal";

export default function BookButton(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white/10 border border-white/30 backdrop-blur text-white text-xs tracking-widest uppercase px-6 py-2.5 rounded hover:bg-white hover:text-black transition-all duration-300"
            >
                Book Now
            </button>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}