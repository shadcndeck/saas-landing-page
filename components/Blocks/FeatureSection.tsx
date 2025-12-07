import { cn } from "@/lib/utils";
import {
    BookOpen,
    Clock,
    MessageCircle,
    Puzzle,
    Users,
    Zap,
} from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            title: "Trained On Your Own Content",
            description:
                "FlowAI absorbs knowledge from your website, help docs, product guides, blog posts, PDFs, and FAQs — ensuring context-rich, accurate responses your customers can trust.",
            icon: <BookOpen />,
        },
        {
            title: "24/7 Real-Time Support",
            description:
                "Never miss a single customer again. From midnight queries to weekend pre-sales questions, FlowAI handles it instantly, anytime, anywhere.",
            icon: <Clock />,
        },
        {
            title: "Human-Like Interactions",
            description:
                "Designed to talk like a real support agent — friendly, natural, and no robotic AI vibes. Keeps conversations helpful and on-brand.",
            icon: <MessageCircle />,
        },
        {
            title: "No Code Setup",
            description: "Connect → Train → Publish. Literally minutes, not weeks — no developers, no complicated workflow.",
            icon: <Zap />,
        },
        {
            title: "Integrates With Your Favorite Tools",
            description: "Connect with CRM, WhatsApp, Messenger, Slack, Gmail, Intercom, HubSpot, Notion, and more — automate workflows end-to-end.",
            icon: <Puzzle />,
        },
        {
            title: "Smart Escalation",
            description:
                "Complex queries? No problem. FlowAI hands off conversations to human agents with full chat history included.",
            icon: <Users />,
        },
    ];
    return (
        <div id="features" className="max-w-7xl mx-auto py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    Why Choose FlowAI?
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    Experience the future of customer support with AI that actually understands your business.
                    Built for scale, designed for humans.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
                index < 3 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-primary group-hover/feature:scale-101 transition duration-200">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
