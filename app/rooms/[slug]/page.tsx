import Image from "next/image";
import { Rooms } from "@/lib/Rooms";
import { notFound } from "next/navigation";
import BookButton from "@/components/ui/buttons/Book";
import BreadCrumb from "@/components/features/rooms/RoomSlug/ui/BreadCrumbs";

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const room = Rooms.find((r) => r.slug === slug);
    
    if (!room) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#04080a] text-white pt-32 pb-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                <BreadCrumb roomName={room.name} />
                <div className="relative w-full h-[60vh] rounded overflow-hidden shadow-2xl">
                    <Image 
                        src={room.image} 
                        alt={room.name} 
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04080a] via-[#04080a]/40 to-transparent"></div>
                    <div className="absolute bottom-10 left-10">
                        <h1 className="text-5xl md:text-7xl font-balkind text-white drop-shadow-lg leading-tight">{room.name}</h1>
                        <p className="text-white font-montserrat text-xl tracking-widest mt-4 uppercase">
                            ${room.price} <span className="text-sm font-light text-neutral-300">/ night</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-balkind">About this space</h2>
                        <p className="font-montserrat text-neutral-300 leading-loose text-lg font-light">
                            {room.description}
                        </p>
                        <p className="font-montserrat text-neutral-300 leading-loose text-lg font-light">
                            Experience unparalleled comfort with our carefully curated amenities, 24/7 room service, and stunning views. Designed to meet the highest standards of luxury, {room.name.toLowerCase()} offers an unforgettable stay.
                        </p>
                    </div>
                    <div className="bg-[#0a1216] border border-white/5 p-12 flex flex-col items-center justify-center text-center gap-8 rounded-none mt-10">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-balkind text-white">Ready to stay?</h3>
                            <p className="font-montserrat text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
                                Secure your reservation now. Our dedicated team will ensure your stay at {room.name} is nothing short of perfection.
                            </p>
                        </div>
                        <BookButton />
                    </div>
                </div>
            </div>
        </main>
    );
}

// Generate static params for all slugs
export function generateStaticParams() {
    return Rooms.map((room) => ({
        slug: room.slug,
    }));
}
