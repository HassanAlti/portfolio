import Image from 'next/image'
import authorImage from '@/public/images/authors/hassan.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>
          Hey, I&#39;m <span className='text-[#2e8b57]'>Hassan</span>.
        </h1>
        <p className='mt-3 font-light text-muted-foreground'>
          A skilled <b>Fullstack Software Developer</b> with proven expertise in{' '}
          <b>Web Development</b>. Passionate about learning new technologies and
          building cool stuff.
        </p>
        <ul className='mt-4 list-none space-y-2'>
          <li>
            <span className='font-bold text-[#2e8b57]'>Email:</span>{' '}
            <a href='mailto:hassanalti@outlook.com'>hassanalti@outlook.com</a>
          </li>
          <li>
            <span className='font-bold text-[#2e8b57]'>Phone:</span>{' '}
            <a href='tel:+96170543248'>+961 70 543 248</a>
          </li>
          <li>
            <span className='font-bold text-[#2e8b57]'>Address:</span> Beirut,
            Lebanon
          </li>
        </ul>
        <a
          href='/Hassan_Alti_CV.pdf'
          download
          className='mt-6 inline-block rounded-md bg-[#2e8b57] px-6 py-2 text-white transition-colors hover:bg-[#3da06c]'
        >
          Download CV
        </a>
      </div>
      <div className='relative flex w-full justify-center md:w-auto'>
        <Image
          className='flex-1 rounded-lg grayscale md:flex-none'
          src={authorImage}
          alt='Hassan Alti'
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  )
}
