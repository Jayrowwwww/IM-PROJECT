import Image from "next/image"

export default function About() {

    return (
        <section id="about" className="min-h-screen bg-[#04080a] text-white flex items-center py-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[60vh] w-full rounded overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-opacity hover:opacity-0 duration-700"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1613618912478-8e320bec495a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Grand Nancy Hotel"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
                    />
                </div>
                <div className="flex flex-col items-start gap-8">
                    <div className="space-y-4">
                        <span className="text-sm font-montserrat tracking-[0.2em] text-neutral-400 uppercase">Our Story</span>
                        <h2 className="text-5xl md:text-6xl font-balkind leading-tight">Discover Luxury</h2>
                    </div>
                    <p className="font-montserrat font-light text-neutral-300 text-lg leading-relaxed">
                        At Grand Nancy Hotel, we take great pride in offering an exceptional and memorable experience for every guest who walks through our doors. Nestled in the heart of the city, our hotel enjoys a prime location that places you just moments away from iconic attractions, vibrant shopping districts, cultural landmarks, and a wide selection of fine dining experiences.
                    </p>
                    <p className="font-montserrat font-light text-neutral-300 text-lg leading-relaxed">
                        Whether you are visiting for business or leisure, our location provides the perfect balance of convenience and discovery.
                    </p>
                    <button className="mt-6 bg-transparent border border-white/30 text-white px-8 py-3 tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300">
                        Read Our Story
                    </button>
                </div>
            </div>
        </section>
    )
}