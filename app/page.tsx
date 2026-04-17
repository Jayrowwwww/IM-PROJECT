import Hero from "@/components/features/home/Hero/Hero";
import Team from "@/components/features/home/Team/Team";
import About from "@/components/features/home/about/About";
import Contact from "@/components/features/home/contact/Contact";
import Room from "@/components/features/home/rooms/Room";

export default function Home() {

    return (
        <main>
            <Hero/>
            <About/>
            <Room/>
            <Team/> 
            <Contact/>
        </main>
    );
}