import RoomCards from "@/components/features/rooms/ui/RoomCards"

export default function Rooms(){

    return(
        <main className="min-h-screen bg-[#020507] text-white pt-32 pb-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <span className="text-sm font-montserrat tracking-[0.2em] text-neutral-400 uppercase">Accommodations</span>
                    <h1 className="text-5xl md:text-6xl font-balkind">Our Rooms & Suites</h1>
                    <p className="font-montserrat text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                        Discover the perfect blend of comfort and luxury. Each of our distinct rooms and suites is uniquely designed to provide an unparalleled experience during your stay in Nancy.
                    </p>
                </div>
                <RoomCards />
            </div>
        </main>
    )
}