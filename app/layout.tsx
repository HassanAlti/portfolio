import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Hassan Alti',
  description: 'Full-stack developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-W7SG1E0Z9D'
        ></Script>
        <Script id='google-analytics'>
          {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W7SG1E0Z9D');
    `}
        </Script>
      </head>
      <body
        className={cn(
          'relative flex min-h-screen flex-col font-sans antialiased', // Added relative
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <ParticlesBackground />
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
