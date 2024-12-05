interface Experience {
  title: string
  company: string
  period: string
  location: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    title: 'Full Stack Web Developer',
    company: 'Upwork',
    period: '09/2022 - Present',
    location: 'Remote',
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

      <div className='space-y-12'>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className='relative rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700/40 dark:bg-black'
          >
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <h3 className='select-text text-xl font-semibold'>
                  {exp.title}
                </h3>
                <p className='mt-1 select-text text-base font-medium text-[#2e8b57]'>
                  {exp.company}
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
        ))}
      </div>
    </section>
  )
}
