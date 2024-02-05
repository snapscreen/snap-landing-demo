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
  },
  {
    formattedUrl: "espn.com",
    title: "Heat 112-100 Pistons (Mar 19, 2023) Final Score",
  },
  {
    formattedUrl: "aiscore.com",
    title: "Miami Heat vs Detroit Pistons Head to Head - Basketball",
  },
  {
    formattedUrl: "si.com",
    title: "Miami Heat vs. Detroit Pistons: Five Major Takeaways",
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
      <header className="mx-auto gap-6 flex justify-center items-center px-8 py-6">
        <p className='text-sm font-medium opacity-80'>Powered by SnapOdds</p>
      </header>
      <main className="flex flex-col items-center justify-between px-6 mx-auto">
        <h1 className='text-xl font-bold'>
          Miami Heat vs. Detroit Pistons
        </h1>
        <p className='text-sm '>
          Live on{' '}
          <a href="#" className='font-bold text-primary underline underline-offset-4 decoration-1'>
            FOX sports</a>
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

          <Card overline='Merchandise'>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Explore Team Insights!
            </h2>
            <p className='mb-4 w-full'>
              Grab your team’s merch now</p>
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
              Grab your team’s merch now</p>
            <div className="relative z-10 w-full mt-auto">
              <button 
                onClick={() => handleButtonClick("fanatics.png")}
                type="button" 
                className="flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                <span className="material-symbols-rounded" aria-hidden="true">storefront</span>
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
                className='font-bold text-primary underline underline-offset-4 decoration-1'>
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
        
        <section className='w-full mt-8 pt-8 border-t-4 border-primary border-dotted'>
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

        <section className='w-full my-8 pt-8 border-t-4 border-primary border-dotted'>
          <h2 className='font-bold text-xl mb-2 flex items-center gap-3'>
            <span className="material-symbols-rounded" aria-hidden="true">search</span>
            Web Search Results
          </h2>
          <SearchResults results={resultsData} />
        </section>
      </main>
      
      <footer className="flex flex-col items-center justify-between px-6 py-6 my-8 mx-auto">
        <p className='text-center'>Snap the TV and get betting odds, merchandise, tickets and similar offers for the game.</p>
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
              {/*
              <iframe 
                src={iframeSrc}
                className='w-full h-screen bg-surface'
                allowTransparency
              ><p>Your browser does not support iframes.</p></iframe>
              */}
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
