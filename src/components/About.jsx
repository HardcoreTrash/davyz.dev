import { Briefcase, Code, User } from "lucide-react"

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Versatile and proactive Aerospace Engineering and Computer Science student
                    </h3>
                    <p className="text-muted-foreground">
                        My proven problem-solving and analytical thinking skills, combined with an ability to pioneer innovative solutions to evolving industry trends make me an emerging professional with the dedication and skill set to excel in teamwork and leadership roles in an engineering role.
                    </p>
                    <p className="text-muted-foreground">
                        I am well skilled in various programming languages (C++, Python). Have basic knowledge of 3D modelling software (Solidworks) and other CAD softwares (AutoDesk, Adobe).
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        {/* <a href="#contact" className="cosmic-button"> */}
                        <a href="https://www.linkedin.com/in/dz72/" target="_blank" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href="/David_Zhang_CV.docx" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semi-bold text-lg">
                                    Web Development
                                </h4>
                                <p className="text-muted-foreground">
                                    Developing full-stack websites, debugging databases and writing maintainable, well-documented.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semi-bold text-lg">
                                    Mobile Development
                                </h4>
                                <p className="text-muted-foreground">
                                    Developed a cross platform mobile application built using Flutter for frontend, dotNet for and MySQL as a relational database.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semi-bold text-lg">
                                    Game Development
                                </h4>
                                <p className="text-muted-foreground">
                                    Produced an immersive, first-person horror game with Virtual Reality compatibility.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}