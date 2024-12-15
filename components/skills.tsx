import Image from 'next/image'

const skills = [
  {
    name: 'JavaScript',
    url: 'https://www.javascript.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'React',
    url: 'https://reactjs.org/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },

  {
    name: 'Next',
    url: 'https://nextjs.org/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  },

  {
    name: 'Laravel',
    url: 'https://www.laravel.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'
  },

  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Java',
    url: 'https://www.java.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
  },
  {
    name: 'Redis',
    url: 'https://redis.io/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'
  },
  {
    name: 'NestJS',
    url: 'https://nestjs.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  },
  {
    name: 'JQuery',
    url: 'https://jquery.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg'
  },
  {
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
  },
  {
    name: 'AWS',
    url: 'https://aws.amazon.com/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    name: 'GIT',
    url: 'https://git-scm.com',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  }
]

export default function Skills() {
  return (
    <section className='pb-24' id='skills'>
      <h2 className='title mb-12 text-[#2e8b57]'>Skills</h2>
      <div className='grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6'>
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center transition-all duration-300 hover:scale-110'
          >
            <div className='relative h-12 w-12'>
              <Image
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                fill
                className='object-contain'
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
