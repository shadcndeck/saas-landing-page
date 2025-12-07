import { HeadsetIcon, LinkIcon, PlusIcon, SettingsIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'

export function FaqSection() {
    const items = [
        {
            icon: SparklesIcon,
            title: 'What is FlowAI?',
            content:
                'FlowAI is an AI-powered customer support chatbot trained specifically on YOUR website content. Like ChatGPT, but for your business — it learns from your help docs, product guides, blog posts, PDFs, and FAQs to provide accurate, context-rich answers to your customers 24/7. No coding required.'
        },
        {
            icon: LinkIcon,
            title: 'How does FlowAI train on my content?',
            content:
                'Simply connect your website, upload your documentation, or paste links to your help resources. FlowAI absorbs knowledge from unlimited websites, PDFs, help docs, and FAQs. The AI chatbot then uses this information to provide accurate, on-brand responses tailored to your specific business.'
        },
        {
            icon: SettingsIcon,
            title: 'How long does it take to set up FlowAI?',
            content:
                'Minutes, not weeks! Our no-code setup is as simple as: Connect → Train → Publish. You can have your AI chatbot live on your website in under 10 minutes. No developers or complicated workflows needed — just point us to your content and we handle the rest.'
        },
        {
            icon: ShieldCheckIcon,
            title: 'What happens when the chatbot can\'t answer a question?',
            content:
                'FlowAI includes Smart Escalation. When the AI encounters a complex query it can\'t confidently answer, it seamlessly hands off the conversation to a human agent with the full chat history included. This ensures your customers always get the help they need without frustration.'
        },
        {
            icon: HeadsetIcon,
            title: 'Are there limits on the number of conversations?',
            content:
                'Yes, depending on your plan. The Free plan includes 50 conversations/month, Pro offers 1,000 conversations/month, and Business supports 5,000 conversations/month. A conversation is counted each time a unique visitor interacts with your chatbot. Need more? Contact us for custom enterprise pricing.'
        }
    ]
    return (
        <div id="faq" className='py-24 sm:py-32'>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    Everything you need to know about FlowAI and how it can transform your business.
                </p>
            </div>
            <Accordion type='single' collapsible className='max-w-4xl mx-auto' defaultValue='item-1'>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionPrimitive.Header className='flex'>
                            <AccordionPrimitive.Trigger
                                data-slot='accordion-trigger'
                                className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45'
                            >
                                <span className='flex items-center gap-4'>
                                    <item.icon className='size-4 shrink-0' />
                                    <span>{item.title}</span>
                                </span>
                                <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

