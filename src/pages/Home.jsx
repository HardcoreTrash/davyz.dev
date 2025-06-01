import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground";
import { Landing } from "../components/Landing";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Footer } from "../components/Footer";
import { LightBackground } from "../components/LightBackground";
import { useState } from "react";
import { Contact } from "../components/Contact";

export const Home = () => {
    const [isDark, setIsDark] = useState(false);

    return  (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* theme */}
            <ThemeToggle onThemeChange={setIsDark} />

            {/* background effects */}
            {/* <LightBackground />
            <StarBackground /> */}
            {!isDark && <LightBackground />}
            {isDark && <StarBackground />}

            {/* navbar */}
            <NavBar/>

            {/* Main content */}
            <main>
                <Landing />
                <About/>
                <Project/>
                <Skills/>
                <Contact/>
            </main>

            {/* Footer */}
            <Footer/>

        </div>
    );
};