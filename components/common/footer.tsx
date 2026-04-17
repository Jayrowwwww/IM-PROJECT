

export default function Header() {

    return(
        <footer className="bg-[#04080a] text-neutral-400 border-t border-white/5 py-12 flex flex-col items-center justify-center font-montserrat mt-auto w-full">
            <h2 className="text-2xl font-balkind text-white mb-4">Grand Nancy Hotel</h2>
            <div className="flex gap-6 mb-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-xs tracking-widest uppercase">© 2024 Grand Nancy Hotel. All rights reserved.</p>
        </footer>
    )
}