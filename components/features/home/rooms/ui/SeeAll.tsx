"use client"
import Link from "next/link";

export default function SeeAll(){

    return(
        <>
            <Link href="/rooms" className="font-montserrat text-neutral-400 hover:underline">See All Rooms</Link>
        </>
    )
}