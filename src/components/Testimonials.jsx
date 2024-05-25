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
          'The healthcare services provided by this clinic have been exceptional. The staff is friendly and professional, and the facilities are top-notch.',
      author: {
        name: 'Mary Smith',
        role: 'Patient',
        image: avatarImage3,
      },
    },
    {
      content:
          'As a healthcare professional, I highly recommend this clinic to anyone seeking quality medical care. The team here goes above and beyond to ensure patient satisfaction.',
      author: {
        name: 'Dr. John Doe',
        role: 'Physician',
        image: avatarImage4,
      },
    },
    {
      content:
          ' I have been coming to this clinic for years, and I have always been impressed by the level of care I receive. The doctors and staff truly care about their patients.',
      author: {
        name: 'Jane Johnson',
        role: 'Long-time Patient',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
          'This platform has been invaluable for my healthcare business. The tools provided have helped me design medical icons tailored to my needs, saving me time and effort.',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
          'The resources available here have greatly enhanced my understanding of healthcare design principles. Watching the instructional videos has been an enlightening experience.',
      author: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: avatarImage11,
      },
    },
    {
      content:
          'The community aspect of this platform has been unexpectedly beneficial. Engaging with other healthcare designers has broadened my perspective and improved my skills.',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
          'The techniques taught here have revolutionized my healthcare design workflow. I can now create accurate medical icons in half the time, thanks to the valuable insights gained from the videos.',
      author: {
        name: 'Steven Hackett',
        role: 'Bootcamp Instructor',
        image: avatarImage5,
      },
    },
    {
      content:
          'Designing healthcare icons has become a therapeutic activity for me, thanks to the innovative ideas presented in this platform. It allows me to unwind while still fostering creativity.',
      author: {
        name: 'Carla Schoen',
        role: 'Healthcare Startup Founder',
        image: avatarImage10,
      },
    },
    {
      content:
          'I can confidently say that this is the most comprehensive healthcare design resource I’ve come across. The quality of content and the depth of knowledge shared here are unmatched.',
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
          Some kind words from early patients...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          See what our patients have to say about their experiences with our
          healthcare services.
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
