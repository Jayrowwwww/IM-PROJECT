import Cards from "./ui/cards"

export default function Room(){

    return(
        <section className="bg-[#04080a] text-white py-24 px-6 md:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <span className="text-sm font-montserrat tracking-[0.2em] text-neutral-400 uppercase">Accommodations</span>
                    <h2 className="text-5xl font-balkind">Our Rooms & Suites</h2>
                </div>
                <Cards />
            </div>
        </section>
    )
}