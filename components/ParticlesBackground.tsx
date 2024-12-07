'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent' // Transparent background
        }
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'connect' // Enables 'connect' mode on hover
          }
        },
        modes: {
          connect: {
            distance: 200, // Maximum distance for connections
            radius: 200, // Radius around the cursor for connections
            links: {
              opacity: 0.8 // Adjust link opacity
            }
          }
        }
      },
      particles: {
        color: {
          value: '#2e8b57' // Particle color
        },
        links: {
          color: '#2e8b57', // Link color
          distance: 200,
          enable: true, // Enable linking between particles
          opacity: 1,
          width: 1
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out
          },
          random: false,
          speed: 1, // Slow movement
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 20 // Number of particles
        },
        opacity: {
          value: 1
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 2, max: 3 }
        }
      },
      detectRetina: true // Enable Retina support for sharper visuals
    }),
    []
  )

  if (!init) return null

  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={options}
    />
  )
}
