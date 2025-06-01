import {
    Github,
    Globe,
    Linkedin,
    Mail,
  } from "lucide-react";

//   website, linkedin, email, github

export const Contact = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are more way to contact me if you're interested.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                                Email
                            </h4>
                            <a href="mailto:zhangdavid2468@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colours">
                                zhangdavid2468@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                                LinkedIn
                            </h4>
                            <a href="https://www.linkedin.com/in/dz72/" target="_blank" className="text-muted-foreground hover:text-primary transition-colours">
                            https://www.linkedin.com/in/dz72/
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Globe className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                                Website
                            </h4>
                            <a href="https://davyzdev.vercel.app/" className="text-muted-foreground hover:text-primary transition-colours">
                                https://davyzdev.vercel.app/
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Github className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                                GitHub
                            </h4>
                            <a href="https://github.com/HardcoreTrash" target="_blank" className="text-muted-foreground hover:text-primary transition-colours">
                                https://github.com/HardcoreTrash
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
}