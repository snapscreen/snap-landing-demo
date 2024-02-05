'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Card from '@/components/Common/Card'
import ThemeSwitch from '@/components/Common/ThemeSwitch'

export default function Home() {

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const animatedItem = {
    visible: { 
      opacity: 1, 
      y: 0 
    },
    hidden: { 
      opacity: 0, 
      y: 100 
    },
  }

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false });

  const stickyElement = React.useRef(null);

  return (
    <div className='max-w-screen-md mx-auto'>
      <header className="mx-auto text-lg font-semibold gap-6 flex justify-between items-center px-8 py-6">

        
      </header>
      <main className="flex flex-col items-center justify-between px-6 mx-auto">
        <p className='mb-6 text-sm font-medium opacity-80'>Powered by SnapOdds</p>
        <h1 className='text-xl font-bold'>
          Miami Heat vs. Detroit Pistons
        </h1>
        <p className='text-sm '>
          Live on{' '}
          <a href="#" className='font-bold text-primary underline underline-offset-4 decoration-1'>FOX sports</a>
        </p>
        <section className='grid grid-cols-2 gap-4 my-4 w-full'>
          <Card overline='Best Odds'>
            <div className='grid grid-cols-2 divide-x mb-4'>
              <div className='flex flex-col items-center gap-2 px-3'>
                <Image 
                  src="/mh-logo.svg"
                  className=''
                  alt="Miami Heat Logo"
                  width={60}
                  height={60}
                />
                <div className='text-sm font-medium'>@ Miami Heat</div>
                <div className='flex items-baseline gap-2 -mr-3'>
                  <span className='text-xl font-bold'>1.90</span>
                  <span className='text-sm'>-1.5</span>
                </div>
              </div>
              <div className='flex flex-col items-center gap-2 px-3'>
                <Image 
                  src="/dp-logo.svg"
                  className=''
                  alt="Detroit Pistons Logo"
                  width={60}
                  height={60}
                />
                <div className='text-sm font-medium'>Detroit Pistons</div>
                <div className='flex items-baseline gap-2 -mr-3'>
                  <span className='text-xl font-bold'>1.90</span>
                  <span className='text-sm'>+1.5</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full mt-auto">
              <button 
                type="button" 
                className="flex items-center justify-center text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                Bet $5, get $150
              </button>
            </div>
          </Card>
          <Card overline='Merchandise'>
            <p className="text-xl text-primary lg:text-2xl font-bold mt-6">
              Merchandise
            </p>
          </Card>
          <Card overline='Tickets' classNames=''>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Looking for tickets?</h2>
            <p className='mb-4'>
              Get your tickets for upcoming games at <a href="#" className='font-bold text-primary underline underline-offset-4 decoration-1'>www.hellotickets.com</a></p>
            <div className="relative z-10 w-full mt-auto">
              <button 
                type="button" 
                className="flex items-center justify-center text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                Save 10% on your tickets
              </button>
            </div>
          </Card>
        </section>
        <section className='w-full my-8'>
          <div className='mb-2 flex items-center gap-3'>
            <span>Game clip</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <time className='text-sm font-medium'>05 Mar, 7:45 pm</time>
          </div>
          <Card isVideo caption='Create and share your own 30-second replay!'>
            <button 
              type="button" 
              className="relative z-10 flex items-center justify-center text-xl py-2 my-auto w-16 h-16 font-semibold shadow-lg rounded-full bg-black/80 text-white backdrop-blur duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-inline-flex"
            >
              <span className='sr-only'>Edit and share clip</span>
              <span 
                className="material-symbols-rounded"
                style={{
                  fontSize: 40,
                  fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
                }}
              >
                play_arrow
              </span>
            </button>
            <Image 
              src="/video-still.webp"
              className='absolute inset-0 z-0 object-cover w-full h-full'
              alt="clip"
              width={500}
              height={300}
            />
          </Card>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-between px-6 py-6 my-8 mx-auto">
        <p className='text-center'>Snap the TV and get betting odds, merchandise, tickets and similar offers for the game.</p>
        <div className='font-semibold text-sm mx-auto mt-8'>
          <ThemeSwitch />
        </div>
      </footer>
    </div>
  )
}