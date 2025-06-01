import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 3, proficiency: "Advanced", category: "frontend" },
    { name: "JavaScript", level: 3, proficiency: "Advanced", category: "frontend" },
    { name: "React", level: 3, proficiency: "Advanced", category: "frontend" },
    { name: "TypeScript", level: 2, proficiency: "Intermediate", category: "frontend" },
    { name: "Tailwind CSS", level: 2, proficiency: "Intermediate", category: "frontend" },
    { name: "Next.js", level: 2, proficiency: "Intermediate", category: "frontend" },
  
    // Backend
    { name: "Node.js", level: 2, proficiency: "Intermediate", category: "backend" },
    { name: "Express", level: 2, proficiency: "Intermediate", category: "backend" },
    { name: "MongoDB", level: 2, proficiency: "Intermediate", category: "backend" },
    { name: "PostgreSQL", level: 2, proficiency: "Intermediate", category: "backend" },
  
    // Tools
    { name: "Git/GitHub", level: 3, proficiency: "Advanced", category: "tools" },
    { name: "Docker", level: 1, proficiency: "Beginner", category: "tools" },
    { name: "Figma", level: 2, proficiency: "Intermediate", category: "tools" },
    { name: "VS Code", level: 3, proficiency: "Advanced", category: "tools" },
  ]

const categories = ["all", "frontend", "backend", "tools"];



export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = skills.filter((skill) => activeCategory == "all" || skill.category == activeCategory);


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>{category}</button>
                ))}
            </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skills, key) => (
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">
                            {skills.name}
                        </h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"/>

                    <div className="flex flex-row">
                        <div className="h-2 ml-0.7 mr-0.7 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{backgroundColor: "hsl(250 65% 65%)", width: 100 + "%"}}/>
                        <div className="h-2 ml-0.7 mr-0.7 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{backgroundColor: skills.level >= 2 ? "hsl(250 65% 65%)" : "transparent", width: 100 + "%"}}/>
                        <div className="h-2 ml-0.7 mr-0.7 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{backgroundColor: skills.level >= 3 ? "hsl(250 65% 65%)" : "transparent", width: 100 + "%"}}/>
                    </div>

                    <div className="text-center mt-1">
                        <span className="text-sm text-muted-foreground">{skills.proficiency}</span>
                    </div>
                </div>
            ))}
        </div>

        </div>
    </section>
};