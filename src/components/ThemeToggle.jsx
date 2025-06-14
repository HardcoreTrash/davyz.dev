import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from '@/lib/utils';

export const ThemeToggle = ({ onThemeChange }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect (() => {
        const storedTheme = localStorage.getItem("theme");
        const dark = storedTheme === "dark" || !storedTheme;
        setIsDarkMode(dark);
        // document.documentElement.classList.toggle("dark", );
        if (dark) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        onThemeChange?.(dark);
    }, [])

    const toggleTheme = () => {
        const nextTheme = !isDarkMode;
        setIsDarkMode(nextTheme);
        // document.documentElement.classList.toggle("dark", nextTheme);
        if (nextTheme) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        localStorage.setItem("theme", nextTheme ? "dark" : "light");
        onThemeChange?.(nextTheme);
    }


    return <button type="button" onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden"
    )}> 
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>} 
    </button>
};
