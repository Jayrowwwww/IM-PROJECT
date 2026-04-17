import Cards from "./ui/cards"
import SeeAll from "./ui/SeeAll"

export default function Room(){

    return(
        <section className="bg-[#04080a] text-white py-24 px-6 md:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <span className="text-sm font-montserrat tracking-[0.2em] text-neutral-400 uppercase">Accommodations</span>
                    <h2 className="text-5xl font-balkind">Our Rooms & Suites</h2>
                    <p className="font-montserrat text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                        Discover the perfect blend of comfort and luxury. Each of our distinct rooms and suites is uniquely designed to provide an unparalleled experience during your stay in Nancy.
                    </p>
                </div>
                <div>
                    <div className="flex justify-end mb-3">
                        <SeeAll />
                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}