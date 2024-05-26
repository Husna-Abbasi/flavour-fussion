'use client'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg'
import videoPlayerImage from '@/images/crispy-fried-chicken-plate-with-salad-carrot.jpg'
import figmaImage from '@/images/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg'
import {useEffect, useState} from "react";

const resources = [
  {
    title: 'Recipe Collection',
    description:
        'Explore our extensive collection of recipes for every occasion and taste preference.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Medical Records Management',
    description:
        'Access our platform for secure and efficient management of electronic medical records (EMR) and patient data.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Support Network for Healthcare Professionals',
    description:
        'Join our community of healthcare professionals to collaborate, share knowledge, and support each other.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
        .then(response => response.json())
        .then(data => setRecipe(data))
        .catch(error => console.error('Error fetching recipe:', error));
  }, []);

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Recipes
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Tools and resources to enhance your healthcare practice.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Discover our range of solutions designed to streamline your workflow and improve patient care.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {recipe && recipe?.map((rec) => (
            <li
              key={rec._id}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <div
                    className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                  <Image src={figmaImage} alt="" unoptimized/>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {rec.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {rec.instructions}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
