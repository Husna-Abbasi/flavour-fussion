import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import Recipe from "@/components/Recipe/page";

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
                role: 'chef',
                image: avatarImage1,
            }}
        >
            <p>
                “CookMaster has transformed my cooking skills! The recipes are not only delicious but also easy to follow.
                I feel like a professional chef in my own kitchen!”
            </p>
        </Testimonial>
        <Screencasts/>
        <Testimonial
            id="testimonial-from-gerardo-stark"
            author={{
                name: 'Gerardo Stark',
                role: 'chef',
                image: avatarImage2,
            }}
        >
            <p>
                “CookMaster has completely changed the way I approach cooking! I used to struggle in the kitchen, but with
                their easy-to-follow recipes, I now cook with confidence and joy. My family loves the meals, and I feel
                like a pro chef!”
            </p>
        </Testimonial>
        <Resources/>
        <FreeChapters/>
        <Recipe/>
        <Testimonials/>
        <Author/>
        <Footer/>
    </>
  )
}
