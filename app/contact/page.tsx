import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-20'>
      <div className='container max-w-3xl'>
        <h2 className='title'>
          Let&apos;s <span className='text-[#2e8b57]'>Talk</span>{' '}
        </h2>

        <ContactForm />
      </div>
    </section>
  )
}
