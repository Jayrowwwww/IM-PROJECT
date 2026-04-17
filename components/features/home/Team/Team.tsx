import TeamCards from "./ui/Cards";

export default function Team() {

    return (
        <section id="team" className="flex flex-col items-center justify-center gap-12 py-24 px-6 min-h-screen bg-[#020507] text-white border-t border-white/5">
            <div className="text-center space-y-4">
                <span className="text-sm font-montserrat tracking-[0.2em] text-neutral-400 uppercase">Meet the Team</span>
                <h2 className="text-5xl font-balkind">Our Dedicated Team</h2>
                <p className="font-montserrat text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mt-6">
                    At Grand Nancy Hotel, our team is dedicated to providing exceptional service and creating unforgettable experiences for our guests. Meet the passionate individuals who make it all possible.
                </p>
            </div>
            
            <TeamCards />
        </section>
    );
}