
import { Badge } from '@/components/ui/badge'
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const Hero = () => {
    return (
        <div>
            {/* Introducing FlowAI */}
            <div className="flex items-center justify-center">
                <Badge className="text-sm font-medium px-4 py-2 " variant={'outline'}>
                    Trusted by 10k+ websites worldwide 🎉
                </Badge>
            </div>

            {/* Hero Text */}
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                    AI Chatbot for Customer Support.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    It&apos;s like ChatGPT, but trained specifically on YOUR website. Automate your customer support & boost your customer&apos;s satisfaction. No Coding Required.
                </p>
            </div>

            {/* Hero Actions */}
            <div className="my-6 mb-12 flex items-center justify-center gap-x-4">
                <ShimmerButton>Try For Free</ShimmerButton>
            </div>


            {/* Hero Video */}
            <div className="relative">
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                    thumbnailAlt="Hero Video"
                />
            </div>

        </div>
    )
}

export default Hero