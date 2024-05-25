import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
        <Testimonial
            id="testimonial-from-tommy-stroman"
            author={{
                name: 'Tommy Stroman',
                role: 'developer',
                image: avatarImage1,
            }}
        >
            <p>
                “I was clueless about managing my health until I discovered these services. Now, I feel empowered to
                take control of my well-being. An invaluable resource!”
            </p>
        </Testimonial>
        <Screencasts/>
        <Testimonial
            id="testimonial-from-gerardo-stark"
            author={{
                name: 'Gerardo Stark',
                role: 'Creator of Pandemicons',
                image: avatarImage2,
            }}
        >
            <p>
                “I used to struggle with understanding my health and finding the right care. Thanks to this service, I
                now have regular check-ups and feel healthier and more confident in managing my well-being.”
            </p>
        </Testimonial>
        <Resources/>
        <FreeChapters/>
        <Pricing/>
        <Testimonials/>
        <Author/>
        <Footer/>
    </>
  )
}
