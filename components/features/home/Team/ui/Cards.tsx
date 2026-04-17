import { Team } from "@/lib/Team";
import Image from "next/image";


export default function TeamCards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl">
                {Team.map(member => (
                    <div key={member.id} className="bg-[#0a1216] border border-white/5 p-6 flex flex-col items-center text-center gap-4">     
                        <Image 
                            src={member.image} 
                            alt={member.name} 
                            className="w-32 h-32 rounded-full object-cover border-2 border-white" />
                        <h3 className="text-xl font-balkind">{member.name}</h3>
                        <p className="text-sm font-montserrat text-neutral-400">{member.position}</p>
                        <p className="font-montserrat text-neutral-400 font-light">{member.bio}</p>
                    </div>
                ))}
            </div>
    )
}