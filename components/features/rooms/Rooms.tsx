import Cards from "../home/rooms/ui/cards"

export default function Rooms(){

    return(
        <main className="min-h-screen flex flex-col items-center justify-center gap-8" id="rooms">
            <h1 className="text-4xl font-balkind">Our Rooms</h1>
            <div>
                <Cards />
            </div>
        </main>
    )
}