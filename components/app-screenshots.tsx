'use client'

import { useRef, useState, useEffect } from 'react'

interface AppScreenshotsProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function AppScreenshots({ images }: AppScreenshotsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScrollButtons()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScrollButtons, { passive: true })
      return () => el.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 320
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <div className='relative my-8'>
      {/* Fade edges */}
      {canScrollLeft && (
        <div className='absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none' />
      )}
      {canScrollRight && (
        <div className='absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none' />
      )}

      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 border shadow-md hover:bg-background transition-all'
          aria-label='Scroll left'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='15 18 9 12 15 6' />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 border shadow-md hover:bg-background transition-all'
          aria-label='Scroll right'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='9 18 15 12 9 6' />
          </svg>
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className='flex gap-4 overflow-x-auto scroll-smooth px-4 py-6 scrollbar-thin'
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className='relative h-[480px] w-[240px] overflow-hidden rounded-2xl border-2 border-foreground/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover'
                loading='lazy'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}