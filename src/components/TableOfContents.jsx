import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Quick and Easy Recipes': {
    'Simple Breakfast Ideas': 1,
    '10-Minute Lunch Recipes': 15,
    'Effortless Dinner Ideas': 20,
  },
  'Specialty Dishes': {
    'Gourmet Desserts': 21,
    'Exotic Entrees': 22,
    'International Flavors': 26,
    'Festive Treats': 31,
    'Healthy Alternatives': 45,
  },
  'Kitchen Tips and Tricks': {
    'Ingredient Substitutions': 50,
    'Cooking Techniques': 57,
    'Meal Planning': 66,
  },
  'Healthy Living': {
    'Nutritious Recipes': 78,
    'Fitness Tips': 82,
    'Wellness Habits': 88,
    'Mindful Eating': 95,
  },
}
export function TableOfContents() {
  return (
      <section
          id="recipes-offered"
          aria-labelledby="table-of-contents-title"
          className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
      >
        <Container>
          <SectionHeading number="1" id="table-of-contents-title">
            Recipes Offered
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Explore our collection of delicious recipes. From quick meals to gourmet dishes, find what you are craving.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our recipes are designed to inspire your inner chef and bring excitement to your kitchen. Dive into our recipe categories below.
          </p>
          <Expandable>
            <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
              <ExpandableItems>
                {Object.entries(tableOfContents).map(([title, services]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                          role="list"
                          className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(services).map(([serviceName, pageNumber]) => (
                            <li
                                key={serviceName}
                                className="flex justify-between py-3"
                                aria-label={`${serviceName} - Page ${pageNumber}`}
                            >
                        <span
                            className="font-medium text-slate-900"
                            aria-hidden="true"
                        >
                          {serviceName}
                        </span>
                              <span
                                  className="font-mono text-slate-400"
                                  aria-hidden="true"
                              >
                          {pageNumber}
                        </span>
                            </li>
                        ))}
                      </ol>
                    </li>
                ))}
              </ExpandableItems>
            </ol>
            <ExpandableButton>See more</ExpandableButton>
          </Expandable>
        </Container>
      </section>
  )
}
