import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Primary Care': {
    'General Check-Up': 1,
    'Pediatric Care': 15,
    'Women\'s Health': 20,
  },
  'Specialized Treatments': {
    'Cardiology': 21,
    'Neurology': 22,
    'Orthopedics': 26,
    'Dermatology': 31,
    'Oncology': 45,
  },
  'Mental Health Services': {
    'Therapy Sessions': 50,
    'Counseling': 57,
    'Psychiatry': 66,
  },
  'Wellness Programs': {
    'Nutrition Counseling': 78,
    'Fitness Training': 82,
    'Stress Management': 88,
    'Yoga and Meditation': 95,
  },
}

export function TableOfContents() {
  return (
      <section
          id="services-offered"
          aria-labelledby="table-of-contents-title"
          className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
      >
        <Container>
          <SectionHeading number="1" id="table-of-contents-title">
            Services Offered
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Explore our range of healthcare services. All the information you need
            is right here.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our healthcare offerings are carefully curated to meet your needs and
            ensure your well-being. Dive into our service details below.
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
