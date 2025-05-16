import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground";
import { Landing } from "../components/Landing";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Footer } from "../components/Footer";

export const Home = () => {
    return  (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* theme */}
            <ThemeToggle />

            {/* background effects */}
            <StarBackground />

            {/* navbar */}
            <NavBar/>

            {/* Main content */}
            <main>
                <Landing />
                <About/>
                <Skills/>
                <Project/>
            </main>

            {/* Footer */}
            <Footer/>

        </div>
    );
};