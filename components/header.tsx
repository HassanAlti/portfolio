'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='#' className='font-serif text-2xl font-bold'>
            HA
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button
          className='group relative z-50 flex h-8 w-8 flex-col items-center justify-center md:hidden'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-1'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-1'
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 right-0 transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } `}
          style={{
            top: '5rem',
            height: 'calc(100vh - 5rem)'
          }}
        >
          {/* Menu Background */}
          <div className='absolute inset-0 bg-white opacity-95 dark:bg-black' />

          {/* Menu Content */}
          <ul className='relative flex flex-col items-center gap-8 pt-12 text-lg font-light'>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link
                href='/#experience'
                onClick={toggleMenu}
                className='block py-2 text-center hover:bg-foreground/5'
              >
                Experience
              </Link>
            </li>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link
                href='/#skills'
                onClick={toggleMenu}
                className='block py-2 text-center hover:bg-foreground/5'
              >
                Skills
              </Link>
            </li>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link
                href='/#projects'
                onClick={toggleMenu}
                className='block py-2 text-center hover:bg-foreground/5'
              >
                Projects
              </Link>
            </li>

            <li className='w-full transition-colors hover:text-foreground'>
              <Link
                href='/#testimonials'
                onClick={toggleMenu}
                className='block py-2 text-center hover:bg-foreground/5'
              >
                Testimonials
              </Link>
            </li>
            <li className='w-full transition-colors hover:text-foreground'>
              <Link
                href='/#contact'
                onClick={toggleMenu}
                className='block py-2 text-center hover:bg-foreground/5'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10 md:flex'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#experience'>Experience</Link>{' '}
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#skills'>Skills</Link>{' '}
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#projects'>Projects</Link>{' '}
          </li>

          <li className='transition-colors hover:text-foreground'>
            <Link href='/#testimonials'>Testimonials</Link>{' '}
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#contact'>Contact</Link>{' '}
          </li>
        </ul>

        <div className='z-50'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
