'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Testimonial {
  id: number
  text: string
  author: string
  project: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'He was very skilled and possessed solid technical expertise and experience. Will hire again for other projects.',
    author: 'Roberto Moreno',
    project: 'Mental Health SaaS - Mindywell',
    image: '/images/testimonials/roberto.jpg'
  },
  {
    id: 2,
    text: 'Working with Hassan is a recipe for success. He was able to understand requirements and deliver quickly. Highly recommended!',
    author: 'Adam Kotowski',
    project: 'Automated Article Generator',
    image: '/images/testimonials/adam.jpg'
  },
  {
    id: 3,
    text: 'Young developer with a good eye for design.',
    author: 'Klaus Oegerli',
    project: 'Tourism Customer Support Chatbot',
    image: '/images/testimonials/klaus.png'
  },
  {
    id: 4,
    text: 'Excellent technical and communication skills, would love to work with him again :)',
    author: 'Rene Jorgensen',
    project: 'Therapist Chatbot SaaS - Mendora AI',
    image: '/images/testimonials/rene.jpg'
  },
  {
    id: 5,
    text: 'Excellent knowledge and insights into the AI development world.',
    author: 'Harry Gurney',
    project: 'AI Review Replier for The Cat & Wickets Pub Co.',
    image: '/images/testimonials/harry.jpg'
  }
]

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [autoplayInterval, setAutoplayInterval] =
    useState<NodeJS.Timeout | null>(null)
  const [hasShownInitialAnimation, setHasShownInitialAnimation] =
    useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      resetAutoplay()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      resetAutoplay()
    }
  }, [emblaApi])

  const resetAutoplay = useCallback(() => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval)
    }
    const newInterval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, 8000)
    setAutoplayInterval(newInterval)
  }, [emblaApi, autoplayInterval])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Handle manual interaction (touch/drag)
  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('settle', resetAutoplay)

    return () => {
      emblaApi.off('settle', resetAutoplay)
    }
  }, [emblaApi, resetAutoplay])

  // Initial animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasShownInitialAnimation) {
            setHasShownInitialAnimation(true)
            // Start autoplay when component comes into view
            resetAutoplay()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [hasShownInitialAnimation, resetAutoplay])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)

    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect, resetAutoplay, autoplayInterval])

  return (
    <section
      ref={componentRef}
      className='relative mx-auto w-full max-w-6xl select-none px-4 py-20'
      id='testimonials'
    >
      <h1 className='title mb-10 text-[#2e8b57]'>Testimonials</h1>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex touch-pan-y'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                'relative min-w-0 flex-[0_0_100%] pl-4 pr-4',
                index === 0 &&
                  hasShownInitialAnimation &&
                  'animate-[wiggle_1.2s_ease-in-out]'
              )}
            >
              <div className='group relative flex flex-col items-center'>
                <div className='relative mb-8 pt-2'>
                  <div className='h-20 w-20 overflow-hidden rounded-full ring-4 ring-[#2e8b57] transition-all duration-300'>
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className='h-full w-full object-cover'
                      loading='lazy'
                    /> */}
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      className='h-full w-full object-cover'
                      loading='lazy'
                      width={20}
                      height={20}
                      unoptimized
                    />
                  </div>
                </div>

                <blockquote className='mb-6 text-center'>
                  <p className='mb-4 text-lg italic leading-relaxed transition-opacity duration-300 md:text-xl'>
                    &ldquo; {testimonial.text} &rdquo;
                  </p>
                  <footer className='text-sm'>
                    <cite className='not-italic'>
                      <span className='font-semibold text-[#2e8b57]'>
                        {testimonial.author}
                      </span>
                      <span className='mt-1 block opacity-60'>
                        {testimonial.project}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 flex items-center justify-center gap-2'>
        <button
          onClick={scrollPrev}
          className='rounded-full p-2 transition-colors duration-200'
          aria-label='Previous testimonial'
        >
          <ChevronLeft className='h-5 w-5' />
        </button>

        <div className='flex gap-2'>
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-300',
                idx === selectedIndex
                  ? 'w-6 bg-[#2e8b57]'
                  : 'bg-gray-600 hover:bg-gray-500'
              )}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => {
                emblaApi?.scrollTo(idx)
                resetAutoplay()
              }}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className='rounded-full p-2 transition-colors duration-200'
          aria-label='Next testimonial'
        >
          <ChevronRight className='h-5 w-5' />
        </button>
      </div>
    </section>
  )
}
