"use client";

import Image from "next/image";
import { Rooms } from "@/lib/Rooms";
import { useState } from "react";
import BookingModal from "@/components/ui/modal/BookingModal";
import { useRouter } from "next/navigation";

export default function Cards() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const router = useRouter();

  const handleBookClick = (e: React.MouseEvent, roomName: string) => {
    e.stopPropagation(); // Stop click from propagating to the card
    setSelectedRoom(roomName);
  };

  const handleCardClick = (slug: string) => {
    router.push(`/rooms/${slug}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Rooms.map((room) => (
          <div 
            onClick={() => handleCardClick(room.slug)} 
            key={room.id} 
            className="group bg-[#0a1216] border border-white/5 rounded-none overflow-hidden cursor-pointer h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image 
                src={room.image} 
                alt={room.name} 
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-8 font-montserrat flex flex-col flex-grow">
              <h3 className="text-2xl font-balkind text-white mb-3">{room.name}</h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6 flex-grow">{room.description}</p>
              <div className='flex justify-between items-end border-t border-white/10 pt-6 mt-auto'>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Starting from</span>
                  <p className="text-white font-montserrat text-lg">
                    ${room.price}<span className="text-sm text-neutral-500">/night</span>
                  </p>
                </div>
                <button 
                  onClick={(e) => handleBookClick(e, room.name)}
                  className='bg-transparent border border-white text-white py-2 px-6 tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-all duration-300'
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookingModal 
        isOpen={!!selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
        roomName={selectedRoom || undefined} 
      />
    </>
  );
}