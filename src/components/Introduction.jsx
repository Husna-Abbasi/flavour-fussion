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
                    Welcome to HealthFirst, where your well-being is our priority.
                </p>
                <p className="mt-4">
                    At HealthFirst, we believe in a holistic approach to healthcare. Our dedicated team of medical
                    professionals is here to provide you with comprehensive care tailored to your unique needs.
                </p>
                <p className="mt-4">
                    From preventive services to advanced treatments, we are committed to helping you achieve and
                    maintain optimal health.
                </p>
                <p className="mt-4">
                    Discover the difference personalized care can make at HealthFirst.
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Comprehensive primary care services',
                        'Specialized care for chronic conditions',
                        'Advanced diagnostic and imaging services',
                        'Personalized wellness plans',
                        'Access to the latest medical technologies',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-8">
                    Join us at HealthFirst and take the first step towards a healthier, happier life.

                </p>
                <p className="mt-10">
                    <Link
                        href="#contact"
                        className="text-base font-medium text-blue-600 hover:text-blue-800"
                    >
                        Contact us today to schedule an appointment{' '}
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </p>
            </Container>
        </section>
    )
}
