import Link from "next/link";

export default function BreadCrumbs({roomName}:{roomName:string}){

    return(
        <div className="text-sm text-neutral-400 font-montserrat tracking-wide uppercase mb-4">
            <span className="hover:underline cursor-pointer"><Link href="/rooms">Rooms</Link></span> / <span>{roomName}</span>
        </div>
    )
}