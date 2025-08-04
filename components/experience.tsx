interface Experience {
  title: string
  company: string
  period: string
  location: string
  highlights: string[]
  logo: string
}

const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Elephants Ride',
    period: '10/02/2025 - Present',
    location: 'Remote',
    logo: '/images/elephants_logo.jpeg',
    highlights: [
      'Built scalable applications using TypeScript, PostgreSQL, Next.js, and React with TanStack for enhanced API integration and state management.',
      'Designed and implemented cron jobs and data scrapers while integrating multiple API vendors into unified services.',
      'Translated Figma designs into responsive, user-friendly interfaces and participated in management meetings to align technical solutions with business objectives.',
      'Refactored legacy codebase into clean, maintainable architecture and mentored junior developers on debugging techniques and best practices.',
      'Collaborated with vendor API support teams to optimize integrations and managed project timelines with accurate delivery estimates.'
    ]
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Upwork',
    period: '09/2022 - Present',
    location: 'Remote',
    logo: '/images/upwork_logo.png',
    highlights: [
      'Completed 16 projects in 2 years, earning a "Top Rated" badge and maintaining a 5/5 rating and 100% client satisfaction.',
      'Saved 30+ hours per month for a dropshipping company by building an automated article generation app with web scraping, markdown exports, and admin dashboard.',
      'Built 2 AI-driven SaaS applications with scalable backend architectures using NestJS, MongoDB, Redis, and modern frontend solutions with React.js, Next.js, and Tailwind CSS.',
      'Boosted customer response rates by 80% for a UK restaurant/pub by creating an AI tool that auto-replied to reviews via TripAdvisor and Google Reviews using Puppeteer.',
      'Supported over 500+ users with a mental health chatbot using GPT, Pinecone, and LangChain, providing personalized care and therapist recommendations across Canada.'
    ]
  }
]

export default function Experience() {
  return (
    <section id='experience' className='relative z-20 pb-12'>
      <h2 className='title mb-12'>
        Work <span className='text-[#2e8b57]'>Experience</span>
      </h2>

      <div className='relative'>
        {/* Vertical timeline line */}
        <div className='absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[#2e8b57] to-zinc-300 dark:to-zinc-600' />

        {experiences.map((exp, idx) => (
          <div key={idx} className='relative mb-12 last:mb-0'>
            {/* Company logo as timeline node */}
            <div className='absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg dark:border-zinc-900 dark:bg-zinc-900'>
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className='h-10 w-10 rounded-full object-cover'
              />
            </div>

            {/* Content */}
            <div className='ml-20 pt-2'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                  <h3 className='select-text text-xl font-semibold'>
                    {exp.title}
                  </h3>
                  <p className='mt-1 select-text text-base font-medium text-[#2e8b57]'>
                    {exp.company === 'Elephants Ride' ? (
                      <a
                        href='https://www.linkedin.com/company/elephants-ride/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline'
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                </div>
                <div className='text-sm text-zinc-500 dark:text-zinc-400'>
                  <p className='select-text italic'>{exp.period}</p>
                  <p className='hidden select-text text-right md:block'>
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className='mt-6 space-y-4'>
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className='relative pl-6 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2e8b57]'
                  >
                    <p className='select-text'>{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
