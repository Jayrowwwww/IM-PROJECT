import Link from "next/link";


export default function ContactButton() {

    return (
        <Link href="/#contact">
            <button className="bg-white/10 border border-white/30 backdrop-blur text-white text-xs tracking-widest uppercase px-6 py-2.5 rounded hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
            </button>
        </Link>
    )
}