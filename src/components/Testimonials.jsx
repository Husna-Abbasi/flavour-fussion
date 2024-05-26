import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
          'The recipes provided on this website have been exceptional. The instructions are clear and easy to follow, and the results are always delicious.',
      author: {
        name: 'Mary Smith',
        role: 'Home Cook',
        image: avatarImage3,
      },
    },
    {
      content:
          'As a professional chef, I highly recommend this website to anyone seeking quality culinary guidance. The team here goes above and beyond to ensure user satisfaction.',
      author: {
        name: 'Chef John Doe',
        role: 'Professional Chef',
        image: avatarImage4,
      },
    },
    {
      content:
          'I have been using this website for years, and I have always been impressed by the level of detail in the recipes. The chefs and contributors truly care about their audience.',
      author: {
        name: 'Jane Johnson',
        role: 'Long-time User',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
          'This platform has been invaluable for my culinary business. The tools provided have helped me design menus tailored to my needs, saving me time and effort.',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
          'The resources available here have greatly enhanced my understanding of cooking techniques. Watching the instructional videos has been an enlightening experience.',
      author: {
        name: 'Regina Wisoky',
        role: 'Culinary Student',
        image: avatarImage11,
      },
    },
    {
      content:
          'The community aspect of this platform has been unexpectedly beneficial. Engaging with other culinary enthusiasts has broadened my perspective and improved my skills.',
      author: {
        name: 'Vernon Cummerata',
        role: 'Home Chef',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
          'The techniques taught here have revolutionized my cooking workflow. I can now create gourmet dishes in half the time, thanks to the valuable insights gained from the videos.',
      author: {
        name: 'Steven Hackett',
        role: 'Culinary Instructor',
        image: avatarImage5,
      },
    },
    {
      content:
          'Cooking has become a therapeutic activity for me, thanks to the innovative ideas presented on this platform. It allows me to unwind while still fostering creativity.',
      author: {
        name: 'Carla Schoen',
        role: 'Cooking Enthusiast',
        image: avatarImage10,
      },
    },
    {
      content:
          'I can confidently say that this is the most comprehensive cooking resource I’ve come across. The quality of content and the depth of knowledge shared here are unmatched.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]
function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from our users...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          See what our users have to say about their experiences with our
          cooking resources.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
