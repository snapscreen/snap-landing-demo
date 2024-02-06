'use client'

import * as React from 'react'
import Sheet from 'react-modal-sheet';
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Card from '@/components/Common/Card'
import SearchResults from '@/components/Common/SearchResults'
import ThemeSwitch from '@/components/Common/ThemeSwitch'

const resultsData = [
  {
    formattedUrl: "nba.com",
    title: "Detroit Pistons vs Miami Heat Oct 25, 2023 Game Summary",
    time: "01/20/2024"
  },
  {
    formattedUrl: "espn.com",
    title: "Heat 112-100 Pistons (Mar 19, 2023) Final Score",
    time: "01/07/2024"
  },
  {
    formattedUrl: "aiscore.com",
    title: "Miami Heat vs Detroit Pistons Head to Head - Basketball",
    time: "12/30/2023"
  },
  {
    formattedUrl: "si.com",
    title: "Miami Heat vs. Detroit Pistons: Five Major Takeaways",
    time: "11/19/2023"
  },
  {
    formattedUrl: "foxsports.com",
    title: "Detroit Pistons vs Miami Heat - October 25, 2023",
    time: "10/10/2023"
  }
]

export default function Home() {
  const [isOpen, setOpen] = React.useState(false)
  const [iframeSrc, setIframeSrc] = React.useState("")

  const handleButtonClick = (url: string) => {
    setIframeSrc(url)
    setOpen(true)
  };

  return (
    <div className='max-w-screen-md mx-auto bg-surface' id="root">
      <header className="mx-auto gap-3 flex justify-center items-center px-8 py-6">
        <p className='text-xs font-medium font-mono text-slate-600 dark:text-slate-400'>Powered by <strong>Snapscreen</strong></p>
      </header>
      <main className="flex flex-col items-center justify-between px-6 mx-auto">
        <h1 className='text-xl font-bold'>
          Miami Heat vs. Detroit Pistons
        </h1>
        <p className='text-sm '>
          Live on{' '}
          <a href="#" className='font-bold text-primary hover:underline underline-offset-4 decoration-1'>
            FOX sports</a>
        </p>
        <section className='grid grid-cols-2 gap-4 my-4 w-full'>
          <Card overline='Best Odds' classNames='top-0'>
            <div className='grid grid-cols-2 divide-x mb-4'>
              <div className='flex flex-col items-center gap-2 px-3'>
                <Image 
                  src="/mh-logo.svg"
                  className=''
                  alt="Miami Heat Logo"
                  width={60}
                  height={60}
                />
                <div className='text-sm font-medium'><span className='text-primary'>@</span> Miami Heat</div>
                <div className='flex items-baseline gap-2 -mr-3'>
                  <span className='text-2xl font-bold'>1.90</span>
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
                  <span className='text-2xl font-bold'>1.90</span>
                  <span className='text-sm'>+1.5</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full mt-auto">
              <div className='text-center mb-3 text-sm'>
                <button 
                  onClick={() => handleButtonClick("odds.png")}
                  type="button"
                  className='font-bold text-primary underline underline-offset-4 decoration-1'>
                  Show more</button>
              </div>
              <button 
                onClick={() => handleButtonClick("odds.png")}
                type="button" 
                className="flex items-center justify-center text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                Bet $5, get $150
              </button>
            </div>
          </Card>

          <Card overline='Statistics'>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Explore Team Insights!
            </h2>
            <p className='mb-4 w-full'>
              View analytics and statistics about the teams.</p>
            <div className="relative z-10 w-full mt-auto">
              <button 
                onClick={() => handleButtonClick("stats.png")}
                type="button" 
                className="flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                <span className="material-symbols-rounded" aria-hidden="true">scoreboard</span>
                View teams stats
              </button>
            </div>
          </Card>

          <Card overline='Merchandise'>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Gear Up for Glory!
            </h2>
            <p className='mb-4 w-full'>
              Shop official merchandise. T-shirts, caps, jackets available for men and women. 100% authentic.</p>
            <div className="relative z-10 w-full mt-auto">
              <button 
                onClick={() => handleButtonClick("fanatics.png")}
                type="button" 
                className="flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                <span className="material-symbols-rounded" aria-hidden="true">apparel</span>
                Get merch
              </button>
            </div>
          </Card>

          <Card overline='Tickets'>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Looking for tickets?</h2>
            <p className='mb-4 w-full'>
              Get your tickets for upcoming games at 
              <button 
                onClick={() => handleButtonClick("tickets.png")}
                type="button"  
                className='font-bold text-primary hover:underline underline-offset-4 decoration-1'>
                www.hellotickets.com</button>
            </p>
            <div className="relative z-10 w-full mt-auto">
              <button 
                onClick={() => handleButtonClick("tickets.png")}
                type="button" 
                className="flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                <span className="material-symbols-rounded" aria-hidden="true">local_activity</span>
                Save 10% on your tickets
              </button>
            </div>
          </Card>

          <Card overline='Missing information?'>
            <h2 className='text-2xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Feeling curious or missing information?
            </h2>
            <p className='mb-4 w-full'>
              Ask a question and get answers from our AI and the fan community.</p>
            <div className="relative z-10 w-full mt-auto">
              <button 
                onClick={() => handleButtonClick("ai.png")}
                type="button" 
                className="flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-on-surface text-surface duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                <span className="material-symbols-rounded" aria-hidden="true">forum</span>
                Ask AI and fellow fans!
              </button>
            </div>
          </Card>
        </section>
        
        <section className='w-full mt-8 pt-8 border-t-4 border-slate-300 dark:border-slate-600'>
          <h2 className='font-bold text-xl mb-2 flex items-center gap-3'>
            <span className="material-symbols-rounded" aria-hidden="true">smart_display</span>
            Clip Result
          </h2>
          <div className='mb-2 flex items-center gap-3'>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <time className='text-sm font-medium'>05 Mar, 7:45 pm</time>
          </div>
          <Card isVideo caption='Create and share your own 30-second replay!'>
            <button 
              onClick={() => handleButtonClick("ai.png")}
              type="button" 
              className="relative z-10 flex items-center justify-center text-xl py-2 my-auto w-20 h-20 font-semibold shadow-lg rounded-full bg-black/80 text-white backdrop-blur duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-inline-flex"
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

        <section className='w-full my-8 pt-8 border-t-4 border-slate-300 dark:border-slate-600'>
          <h2 className='font-bold text-xl mb-2 flex items-center gap-3'>
            <span className="material-symbols-rounded" aria-hidden="true">search</span>
            Web Search Results
          </h2>
          <SearchResults results={resultsData} />
        </section>
      </main>
      
      <footer className="flex flex-col items-center justify-between px-6 py-6 my-8 mx-auto">
        <div className='flex gap-6'>
          <svg className="w-12 h-12 aspect-square" viewBox="0 0 176 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.01001 38.91C10.51 38.91 14.02 36.51 14.02 31.9V25.07H13.95V23.69H14.01V14.03H64.7401C69.7201 14.03 71.75 10.52 71.75 7.02C71.75 3.52 69.7201 0 64.7401 0H7.01001C3.32001 0 0 3.32 0 7.02V23.68H0.0100098V25.06H0V31.89C0 36.5 3.51001 38.9 7.01001 38.9V38.91Z" fill="currentColor"/>
            <path d="M64.7401 113.45H14.01V99.6V99.37H14.02V92.54C14.02 87.93 10.51 85.53 7.01001 85.53C3.51001 85.53 0 87.93 0 92.54V99.37H0.0700073V99.6H0V120.45C0 124.14 3.32001 127.46 7.01001 127.46H64.7401C69.7201 127.46 71.75 123.96 71.75 120.45C71.75 116.94 69.7201 113.44 64.7401 113.44V113.45Z" fill="currentColor"/>
            <path d="M175.16 23.68V7.02C175.16 3.32 171.84 0 168.15 0H110.42C105.44 0 103.41 3.51 103.41 7.02C103.41 10.53 105.44 14.03 110.42 14.03H161.15V23.69H161.21V25.07H161.14V31.9C161.14 36.51 164.65 38.91 168.15 38.91C171.65 38.91 175.16 36.51 175.16 31.9V25.07H175.15V23.69H175.16V23.68Z" fill="currentColor"/>
            <path d="M168.15 85.53C164.65 85.53 161.14 87.93 161.14 92.54V99.37H161.15V99.6V113.45H110.42C105.44 113.45 103.41 116.95 103.41 120.46C103.41 123.97 105.44 127.47 110.42 127.47H168.15C171.84 127.47 175.16 124.15 175.16 120.46V99.61H175.09V99.38H175.16V92.55C175.16 87.94 171.65 85.54 168.15 85.54V85.53Z" fill="currentColor"/>
            <rect x="70" y="34" width="36" height="60" rx="4" fill="#FF385C"/>
          </svg>
          <div className='flex-1'>
            <p className='mb-2'>Snap any sports game on your live TV screen to access betting odds, merchandise, tickets, and more.</p>
            <p className='text-xs font-medium font-mono text-slate-600 dark:text-slate-400'>Powered by <strong>Snapscreen</strong></p>
          </div>
        </div>
        <div className='font-semibold text-sm mx-auto mt-8'>
          <ThemeSwitch />
        </div>
      </footer>

      <Sheet 
        rootId="root" 
        isOpen={isOpen} 
        onClose={() => (setOpen(false), setIframeSrc(''))}
        snapPoints={[800, 600, 0]}
        initialSnap={1}
      >
        <Sheet.Container className='!bg-surface !text-on-surface'>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <Image
                src={'/'+iframeSrc}
                alt=""
                width={400}
                height={1000}
              />
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop 
          onTap={() => (setOpen(false), setIframeSrc(''))}
        />
      </Sheet>
    </div>
  )
}
