import Link from "next/link";
import ContactButton from "../ui/buttons/ContactButton";

export default function Header() {

    return (
        <header className="flex justify-between items-center border-b border-white/10 bg-black/30 backdrop-blur-md text-white py-4 px-10 fixed w-full top-0 z-50 transition-all duration-300">
            <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-2xl font-balkind tracking-wide">Grand Nancy Hotel</h1>
            </Link>
            <div className="flex justify-center items-center gap-16">
                <nav className="hidden md:flex gap-8 font-montserrat text-xs tracking-[0.15em] uppercase">
                    <Link href="/" className="hover:text-neutral-300 transition-colors">Home</Link>
                    <Link href="/rooms" className="hover:text-neutral-300 transition-colors">Rooms</Link>
                    <Link href="/#about" className="hover:text-neutral-300 transition-colors">About</Link>
                </nav>

                <ContactButton />
            </div>
        </header>
    );
}