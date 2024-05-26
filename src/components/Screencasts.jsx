import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import setupImage from '@/images/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg';
import strokesImage from '@/images/crispy-fried-chicken-plate-with-salad-carrot.jpg';

const videos = [
  {
    title: 'Classic Spaghetti Bolognese',
    description:
        'A rich and hearty spaghetti dish made with ground beef, tomatoes, and Italian herbs. Perfect for a comforting meal.',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Chicken Caesar Salad',
    description:
        'A refreshing salad featuring grilled chicken, crisp romaine lettuce, crunchy croutons, and Caesar dressing.',
    image: strokesImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Chocolate Chip Cookies',
    description:
        'Deliciously soft and chewy cookies loaded with chocolate chips. A classic treat for any occasion.',
    image: setupImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Vegetable Stir-Fry',
    description:
        'A quick and easy stir-fry with fresh vegetables and a savory sauce. Perfect for a healthy weeknight dinner.',
    image: strokesImage,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="recipes"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Recipes
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Discover a world of delicious recipes to elevate your culinary skills.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          From classic comfort foods to innovative dishes, our recipes are designed to inspire and delight.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                      'conic-gradient(from -49.8deg at 50% 50%, #FF7F50 0deg, #FFA07A 59.07deg, #FF6347 185.61deg, #FFD700 284.23deg, #FF8C00 329.41deg, #FF7F50 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <Image src={video.image} alt="" unoptimized />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${video.runtime.minutes}:${video.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
