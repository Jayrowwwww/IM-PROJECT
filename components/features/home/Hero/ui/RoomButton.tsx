import Link from "next/link"

export default function RoomsButton(){

    return(
        <Link href="/rooms">
            <button className="bg-black/20 border-2 border-white/70 backdrop-blur text-white px-10 py-3 rounded text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                View Rooms
            </button>
        </Link>
    )
}