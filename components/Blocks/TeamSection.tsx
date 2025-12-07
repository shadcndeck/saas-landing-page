import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export function TeamSection() {
    const teamMembers = [
        {
            name: "Phillip Bothman",
            role: "Founder & CEO",
            description: "A visionary leader driving innovation and collaboration.",
            image: "/team/phillip.png",
            initials: "PB",
        },
        {
            name: "James Kenter",
            role: "Engineering Manager",
            description: "Leading teams to build smart, scalable solutions.",
            image: "/team/james.png",
            initials: "JK",
        },
        {
            name: "Cristofer Kenter",
            role: "Product Designer",
            description: "Crafting intuitive and engaging user experiences.",
            image: "/team/cristofer.png",
            initials: "CK",
        },
        {
            name: "Alena Lubin",
            role: "Frontend Developer",
            description: "Bringing designs to life with seamless interfaces.",
            image: "/team/alena.png",
            initials: "AL",
        },
    ];

    return (
        <div id="team" className="max-w-7xl mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    Meet Our Amazing Team
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                    <Card
                        key={member.name}
                        className="group hover:shadow-lg transition-all duration-300 border-neutral-200 dark:border-neutral-800"
                    >
                        <CardContent className="p-6 text-center">
                            <Avatar className="w-32 h-32 mx-auto mb-4">
                                <AvatarImage src={member.image} alt={member.name} />
                                <AvatarFallback className="text-2xl bg-neutral-200 dark:bg-neutral-800">
                                    {member.initials}
                                </AvatarFallback>
                            </Avatar>

                            <h3 className="text-xl font-bold mb-1 text-neutral-800 dark:text-neutral-100">
                                {member.name}
                            </h3>

                            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                                {member.role}
                            </p>

                            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                                {member.description}
                            </p>

                            <div className="flex justify-center gap-3">
                                <a
                                    href="#"
                                    className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
