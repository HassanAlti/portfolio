import Intro from '@/components/intro'
import RecentProjects from '@/components/recent-projects'
import Contact from './contact/page'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <>
      <section className='pb-24 pt-40'>
        <div className='container max-w-3xl'>
          <Intro />

          <Skills />

          <RecentProjects />

          <Contact />
        </div>
      </section>
    </>
  )
}
