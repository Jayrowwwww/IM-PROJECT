export default function ContactForm() {

    return (
        <div>
            <form action="" method="post" className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">Name</label>
                    <input type="text" name="name" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Enter Name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">Email</label>
                    <input type="email" name="email" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Enter Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">Message</label>
                    <textarea name="message" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors h-24 resize-none" placeholder="How can we help you..." />
                </div>
                <button type="submit" className="mt-4 bg-white text-black py-3 px-8 text-xs uppercase tracking-widest hover:bg-neutral-200 transition duration-300 self-start">
                    Send Message
                </button>
            </form>
        </div>
    )
}