import Link from 'next/link'

import {CheckIcon} from '@/components/CheckIcon'
import {Container} from '@/components/Container'

export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
        >
            <Container className="text-lg tracking-tight text-slate-700">
                <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
                    Welcome to CookMaster, where your culinary journey begins.
                </p>
                <p className="mt-4">
                    At CookMaster, we are passionate about cooking and sharing delicious recipes with you. Our
                    team of culinary experts is dedicated to providing you with a wide range of recipes that
                    will inspire you to create mouthwatering dishes in your own kitchen.
                </p>
                <p className="mt-4">
                    From traditional family recipes to modern culinary creations, we are here to guide you
                    every step of the way.
                </p>
                <p className="mt-4">
                    Explore the world of cooking with CookMaster and embark on a flavorful adventure.
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Easy-to-follow recipes for all skill levels',
                        'Tips and tricks from professional chefs',
                        'Ingredient substitutions and cooking hacks',
                        'Healthy and nutritious meal ideas',
                        'Exciting new recipes updated regularly',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-8">
                    Join us at CookMaster and discover the joy of cooking delicious meals for yourself and your loved ones.
                </p>
                <p className="mt-10">
                    <Link
                        href="#contact"
                        className="text-base font-medium text-ffOrange hover:text-orange"
                    >
                        Get started today and explore our recipes collection{' '}
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </p>
            </Container>
        </section>
    )
}
