import ContactForm from "./Forms";

export default function Contact() {

    return (
        <section id="contact" className="flex flex-col items-center justify-center gap-12 py-24 px-6 min-h-screen bg-[#020507] text-white border-t border-white/5">
            <div className="text-center space-y-4">
                <span className="text-sm font-montserrat tracking-[0.2em] text-neutral-400 uppercase">Get in touch</span>
                <h2 className="text-5xl font-balkind">Contact Us</h2>
                <p className="font-montserrat text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mt-6">
                    Have questions or want to make a reservation? Our team is here to assist you. Reach out to us through any of the following methods, and we&apos;ll be happy to help you plan your stay.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl items-start">
                <div className="bg-[#0a1216] border border-white/5 p-10">
                    <ContactForm />
                </div>

                <div className="flex flex-col items-start gap-10 mt-4 md:mt-10">
                    <div>
                        <h3 className="text-xl font-balkind mb-2">Location</h3>
                        <p className="font-montserrat text-neutral-400 text-sm font-light">123 Calans Street<br />6017 Cordova, Cebu</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-balkind mb-2">Direct Contact</h3>
                        <p className="font-montserrat text-neutral-400 text-sm font-light mb-1">Email: <a href="mailto:email@grandnancyhotel.com" className="text-white hover:text-neutral-300 transition-colors">email@grandnancyhotel.com</a></p>
                        <p className="font-montserrat text-neutral-400 text-sm font-light">Phone: <a href="tel:+63 123 456 7890" className="text-white hover:text-neutral-300 transition-colors">+63 123 456 7890</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}