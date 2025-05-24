import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Event Management Platform",
        description: "A cross platform mobile application built using Flutter for frontend, dotNet for and MySQL as a relational database.",
        image: "/projects/Placeholder.svg",
        tags: ["Flutter", "Dotnet", "MySQL"],
        // demoURL: "#",
        // githubURL: "#",
    },
    {
        id: 2,
        title: "Gone Girl",
        description: "An immersive, first-person horror game with Virtual Reality compatibility",
        image: "/projects/Placeholder.svg",
        tags: ["Unreal Engine 5" , "Blender"],
        demoURL: "https://www.youtube.com/watch?v=n-6HOQk8SBw&ab_channel=DrewSanders",
        // githubURL: "#",
    },
    {
        id: 3,
        title: "Dungeon Game",
        description: "A simple turn-based roguelike dungeon crawler as a team of 4 using Java.",
        image: "/projects/Placeholder.svg",
        tags: ["Java"],
        // demoURL: "#",
        // githubURL: "#",
    },
    {
        id: 4,
        title: "VInterviewer",
        description: "A cost-free and easily accessible solution to address the lack of interviewing skills in the industry.",
        image: "/projects/Placeholder.svg",
        tags: ["React" , "Typescript", "Python", "Flask", "OpenAI"],
        demoURL: "https://devpost.com/software/virtual-interviewer-b5to9a",
        githubURL: "https://github.com/HardcoreTrash/unihack2024-fe",
    },
    {
        id: 5,
        title: "ASEANSoc Home Website",
        description: "UNSW ASEANSoc home website.",
        image: "/projects/Placeholder.svg",
        tags: ["ReactJS" , "Typescript", "MaterialUI", "NextJS"],
        demoURL: "https://www.unswaseansociety.com/",
        // githubURL: "#",
    },
    {
        id: 6,
        title: "ASEANSoc Conference Website",
        description: "UNSW ASEANSoc home website.",
        image: "/projects/Placeholder.svg",
        tags: ["SquareSpace"],
        demoURL: "https://www.unswaseanconference.com/",
        // githubURL: "#",
    },
    {
        id: 5,
        title: "Flight-Computers",
        description: "UNSW Rokcetry flight computer",
        image: "/projects/Placeholder.svg",
        tags: ["C++", "Python"],
        // demoURL: "",
        // githubURL: "",
    },

]

export const Project = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col flex-1">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        {/* <div className="p-6 flex flex-col flex-1"> */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, key) => (
                                <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"> {tag} </span>
                            ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="mt-auto flex justify-end items-center pt-4">
                                <div className="flex space-x-3">
                                    {project.demoURL && ( <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/> </a> ) }
                                    {project.githubURL && (<a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20} /> </a> )}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/HardcoreTrash">
                    Check out my GitHub <ArrowRight size={16}/>
                </a>
            </div>

        </div>

    </section>
};