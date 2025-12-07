"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
    {
        name: 'Free',
        description: 'Perfect for testing FlowAI on your personal website',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            '1 AI Chatbot',
            '50 conversations/month',
            'Train on 1 website',
            'Basic analytics',
            'Community support'
        ],
        cta: 'Get Started',
        popular: false
    },
    {
        name: 'Pro',
        description: 'For growing businesses that need more power',
        monthlyPrice: 29,
        yearlyPrice: 24,
        features: [
            '3 AI Chatbots',
            '1,000 conversations/month',
            'Train on unlimited websites & docs',
            'Remove FlowAI branding',
            'Integrations (Slack, Zapier)',
            'Priority email support'
        ],
        cta: 'Start Free Trial',
        popular: true,
        includesPrevious: 'All Free features, plus'
    },
    {
        name: 'Business',
        description: 'For large teams requiring scale and control',
        monthlyPrice: 99,
        yearlyPrice: 79,
        features: [
            '10 AI Chatbots',
            '5,000 conversations/month',
            'Priority 24/7 support',
            'API Access',
            'Smart Escalation to humans',
            'Custom integrations'
        ],
        cta: 'Contact Sales',
        popular: false,
        includesPrevious: 'All Pro features, plus'
    }
]

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <section id="pricing" className="py-24 sm:py-32 border bg-muted/40 rounded-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <Badge variant="outline" className="mb-4">Pricing Plans</Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Choose your plan
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Start with our free AI chatbot to automate support, or upgrade to Pro for unlimited training sources and advanced integrations.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center mb-2">
                        <ToggleGroup
                            type="single"
                            value={isYearly ? "yearly" : "monthly"}
                            onValueChange={(value) => setIsYearly(value === "yearly")}
                            className="bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none"
                        >
                            <ToggleGroupItem
                                value="monthly"
                                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
                            >
                                Monthly
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="yearly"
                                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
                            >
                                Annually
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-semibold">Save 20%</span> On Annual Billing
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mx-auto max-w-6xl">
                    <div>
                        <div className="grid lg:grid-cols-3">
                            {plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`p-8 grid grid-rows-subgrid row-span-4 gap-6 ${plan.popular
                                        ? 'my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur'
                                        : 'my-2 mx-4 rounded-xl bg-muted border scale-99'
                                        }`}
                                >
                                    {/* Plan Header */}
                                    <div>
                                        <div className="text-lg font-medium tracking-tight mb-2">{plan.name}</div>
                                        <div className="text-muted-foreground text-balance text-sm">{plan.description}</div>
                                    </div>

                                    {/* Pricing */}
                                    <div>
                                        <div className="text-4xl font-bold mb-1">
                                            {plan.name === 'Lifetime' ? (
                                                `$${plan.monthlyPrice}`
                                            ) : plan.name === 'Free' ? (
                                                '$0'
                                            ) : (
                                                `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
                                            )}
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {plan.name === 'Lifetime' ? 'One-time payment' : 'Per month'}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div>
                                        <Button
                                            className={`w-full cursor-pointer my-2 rounded-full ${plan.popular
                                                ? 'shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90'
                                                : 'shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50'
                                                }`}
                                            variant={plan.popular ? 'default' : 'secondary'}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </div>


                                    {/* Features */}
                                    <div>
                                        <ul role="list" className="space-y-3 text-sm">
                                            {plan.includesPrevious && (
                                                <li className="flex items-center gap-3 font-medium">
                                                    {plan.includesPrevious}:
                                                </li>
                                            )}
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-3">
                                                    <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
