'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AnimatedProfileImageProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export const AnimatedProfileImage = ({
  src,
  alt,
  size = 200,
  className
}: AnimatedProfileImageProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isEggHovering, setIsEggHovering] = useState(false)
  const timeoutRef = useRef<number>()

  useEffect(() => {
    if (isHovering) {
      timeoutRef.current = window.setTimeout(() => {
        setIsCompleted(true)
      }, 3000)
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (!isCompleted) {
        setIsCompleted(false)
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isHovering, isCompleted])

  return (
    <div
      className={cn('relative w-full max-w-[200px] md:w-[200px]', className)}
      style={{ aspectRatio: '1/1' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'h-full w-full rounded-lg object-cover transition-transform duration-300',
          !isCompleted && 'grayscale',
          isCompleted && 'animate-image-pop'
        )}
      />
      {isCompleted && (
        <div
          className='absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap'
          onMouseEnter={() => setIsEggHovering(true)}
          onMouseLeave={() => setIsEggHovering(false)}
        >
          <Image
            src='/images/easter-egg.svg'
            alt='Easter egg'
            width={15}
            height={15}
            className='inline'
          />
          {isEggHovering && (
            <div className='absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-3 py-1 text-sm text-white'>
              You found the easter egg!
            </div>
          )}
        </div>
      )}
      <svg
        className='absolute inset-0 h-full w-full -rotate-90 scale-110'
        viewBox='0 0 100 100'
        fill='none'
      >
        <rect
          x='2'
          y='2'
          width='96'
          height='96'
          rx='8'
          stroke='#2e8b57'
          strokeWidth='1'
          className={cn(
            'stroke-[3]',
            isHovering && !isCompleted && 'animate-border-progress',
            isCompleted && 'stroke-dasharray-[999_999]'
          )}
          pathLength='999'
          strokeDasharray='0 999'
        />
      </svg>
    </div>
  )
}
