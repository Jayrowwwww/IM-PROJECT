"use client";

import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName?: string;
}

export default function BookingModal({ isOpen, onClose, roomName }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-[#0a1216] border border-white/10 w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-balkind text-white mb-2">Reservation</h2>
        <p className="text-neutral-400 font-montserrat text-sm mb-6">
          {roomName ? `Booking for ${roomName}` : 'Fill in your details to secure your stay.'}
        </p>

        <form className="flex flex-col gap-5 font-montserrat" onSubmit={(e) => { e.preventDefault(); alert('Booking successful!'); onClose(); }}>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-400">Full Name</label>
            <input type="text" required className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Enter Your Name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-neutral-400">Check-in</label>
              <input type="date" required className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-neutral-400">Check-out</label>
              <input type="date" required className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-400">Guests</label>
            <select className="bg-transparent border-b border-white/20 pb-2 text-neutral-300 focus:outline-none focus:border-white transition-colors appearance-none">
              <option className="bg-[#0b1821]">1 Guest</option>
              <option className="bg-[#0b1821]">2 Guests</option>
              <option className="bg-[#0b1821]">3 Guests</option>
              <option className="bg-[#0b1821]">4+ Guests</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-400">Room Type</label>
            <select className="bg-transparent border-b border-white/20 pb-2 text-neutral-300 focus:outline-none focus:border-white transition-colors appearance-none">
              <option className="bg-[#0b1821]">Standard Room</option>
              <option className="bg-[#0b1821]">Deluxe Room</option>
              <option className="bg-[#0b1821]">Executive Suite</option>
              <option className="bg-[#0b1821]">Presidential Suite</option>
              <option className="bg-[#0b1821]">Family Suite</option>
              <option className="bg-[#0b1821]">Honeymoon Suite</option>
            </select>
          </div>
          <button type="submit" className="mt-4 bg-white text-black py-3 px-8 text-xs uppercase tracking-widest hover:bg-neutral-200 transition duration-300 w-full">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
