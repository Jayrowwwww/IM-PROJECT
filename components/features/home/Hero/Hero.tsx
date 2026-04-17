import RoomsButton from "./ui/RoomButton"
import BookButton from "./ui/BookButton"

export default function Hero(){

    return(
        <main className="relative min-h-screen flex flex-col items-center justify-center gap-8 bg-[url('https://images.unsplash.com/photo-1702814160779-4a88cfb330c7?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-linear-to-b from-[#04080a]/10 to-[#04080a]"></div>
            <div className="relative flex flex-col items-center justify-center gap-8 z-10">
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                    <h1 className="text-[8rem] balkind">Grand Nancy Hotel</h1>
                    <p className="font-montserrat">Experience elegance and comfort with our exceptional service and amenities. A truly memorable stay awaits you.</p>
                </div>
                <div className="flex gap-4">
                    <BookButton/>
                    <RoomsButton/>
                </div>
            </div>
        </main>
    )
}