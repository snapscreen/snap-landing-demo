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
        <div className='mb-6'>
          <svg className="h-8" viewBox="0 0 234 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.3099 5.62659L51.5789 14.5416C51.4727 14.7008 51.2074 14.8069 51.0482 14.7008C37.8349 8.0676 22.552 20.2727 9.0734 17.3541C8.96727 17.301 8.86114 17.2479 8.75501 17.1418C8.80807 17.1418 2.28102 7.16549 0.10533 3.82236C-0.159997 3.39784 0.158396 2.81412 0.742117 2.86718C1.90956 3.13251 7.00385 4.24689 10.9307 4.56528C31.3609 5.67965 42.4516 -6.57848 57.2569 5.04287C57.4161 5.149 57.4691 5.41433 57.3099 5.62659ZM40.6474 31.1511C40.7535 31.2042 40.8596 31.1511 40.9658 31.045L47.8643 20.2727C47.9704 20.1135 47.8643 19.9543 47.7051 19.9012C37.6757 16.452 28.2831 23.0851 13.9554 23.4566C13.584 23.4566 13.2125 23.8811 13.4778 24.3587L28.9199 48.2382C29.1322 48.6627 29.6628 48.3974 29.6097 48.0259L26.2666 32.9023C26.2136 32.7431 26.3197 32.6369 26.4258 32.5839C27.7525 32.2124 36.5083 29.2407 40.6474 31.1511Z" fill="#E53D2E"/>
              <path d="M125.446 23.1382C131.071 23.1382 134.892 27.4896 134.892 33.9636V46.0094C134.892 46.1686 134.732 46.3278 134.573 46.3278H129.054C128.895 46.3278 128.736 46.1686 128.736 46.0094V34.0166C128.736 31.5226 127.516 28.8162 124.066 28.8162H123.96C121.36 28.8693 119.131 31.2042 119.131 33.8574V46.0094C119.131 46.1686 118.972 46.3278 118.813 46.3278H113.347C113.188 46.3278 113.029 46.1686 113.029 46.0094V23.7219C113.029 23.5627 113.188 23.4035 113.347 23.4035H118.654C118.813 23.4035 118.972 23.5627 118.972 23.7219V25.6854C120.988 23.9342 123.058 23.1382 125.446 23.1382ZM209.555 42.2949C209.449 42.401 209.502 42.6133 209.608 42.7194C212.898 46.0094 216.453 46.434 219.531 46.434C223.883 46.434 227.12 44.7889 228.499 41.8703C228.924 40.9682 229.136 40.013 229.136 39.0048C229.136 33.1145 224.042 32.0532 219.637 31.7879C216.135 31.5756 216.135 30.3551 216.135 29.9306C216.135 28.4448 218.523 28.2856 219.531 28.2856C221.495 28.2856 222.98 28.7632 224.201 29.8245C224.307 29.9306 224.519 29.9306 224.625 29.7714L227.756 26.1629C227.862 26.0568 227.862 25.8446 227.703 25.7384C225.421 23.8281 222.98 23.0321 219.425 23.0321C217.143 23.0321 214.914 23.6158 213.269 24.571C211.147 25.8446 210.032 27.7549 210.032 30.0898C210.032 34.1758 213.269 36.6699 219.213 37.0944C222.556 37.3067 222.98 38.2619 222.98 39.1109C222.98 40.3314 221.335 40.9682 219.743 40.9682H219.584C216.984 40.9152 214.49 39.96 212.845 38.4211C212.686 38.3149 212.473 38.3149 212.367 38.4741L209.555 42.2949ZM154.101 38.5272C155.003 37.4659 155.428 35.9801 155.428 34.3881C155.428 31.5226 153.677 28.4978 149.432 28.4978C145.929 28.4978 143.594 30.8858 143.594 34.4412C143.594 37.9966 145.929 40.4376 149.432 40.4376C151.236 40.4376 153.04 39.7477 154.101 38.5272ZM155.269 23.6689C155.269 23.5097 155.428 23.3505 155.587 23.3505H161.053C161.212 23.3505 161.371 23.5097 161.371 23.6689V46.0094C161.371 46.1686 161.212 46.3278 161.053 46.3278H155.587C155.428 46.3278 155.269 46.1686 155.269 46.0094V44.3113C153.358 46.0625 151.077 46.1156 149.113 46.1686H148.795C145.505 46.1686 142.745 45.1604 140.729 43.197C138.606 41.1274 137.545 38.1027 137.545 34.4942C137.545 27.4896 142.002 22.979 148.954 22.979H149.06C151.236 22.979 153.518 23.1913 155.322 24.6771L155.269 23.6689ZM87.2919 17.8317V12.472C87.2919 12.2598 87.1327 12.1006 86.9204 12.1006H67.0209C66.8086 12.1006 66.6494 12.2598 66.6494 12.472V45.9033C66.6494 46.1156 66.8086 46.2748 67.0209 46.2748H72.3805C72.5927 46.2748 72.7519 46.1156 72.7519 45.9033V32.2655C72.7519 32.0532 72.9111 31.894 73.1234 31.894H83.1528C83.365 31.894 83.5242 31.7348 83.5242 31.5226V26.1099C83.5242 25.8976 83.365 25.7384 83.1528 25.7384H73.1234C72.9111 25.7384 72.7519 25.5792 72.7519 25.367V18.6276C72.7519 18.4154 72.9111 18.2562 73.1234 18.2562H86.8674C87.1327 18.2562 87.2919 18.0439 87.2919 17.8317ZM204.301 39.164C204.195 39.0579 203.983 39.0579 203.877 39.164C202.816 40.0661 201.436 40.5437 200.109 40.5437C196.766 40.5437 194.431 38.1557 194.431 34.7065C194.431 31.2572 196.766 28.8693 200.109 28.8693C201.436 28.8693 202.762 29.3469 203.877 30.249C203.983 30.3551 204.195 30.3551 204.301 30.249L207.857 26.5344C207.963 26.4283 207.963 26.216 207.857 26.1099C205.575 23.9342 203.24 23.0321 200.056 23.0321C192.892 23.0321 188.276 27.6488 188.276 34.8126C188.276 41.9765 192.892 46.5932 200.056 46.5932C203.24 46.5932 205.575 45.6911 207.857 43.5154C207.963 43.4092 207.963 43.197 207.857 43.0908L204.301 39.164ZM175.752 46.3278C175.911 46.3278 176.07 46.1686 176.07 46.0094V41.0213C176.07 40.8621 175.911 40.7029 175.752 40.7029H173.046C171.454 40.6498 170.711 39.8538 170.711 38.1557V29.6122H175.752C175.911 29.6122 176.07 29.453 176.07 29.2938V23.7219C176.07 23.5627 175.911 23.4035 175.752 23.4035H170.764V18.5746C170.764 18.4154 170.605 18.2562 170.446 18.2562H164.927C164.768 18.2562 164.608 18.4154 164.608 18.5746V38.1557C164.608 43.3562 167.527 46.3278 172.674 46.3278H173.683H175.752ZM102.416 38.5272C103.318 37.4659 103.742 35.9801 103.742 34.3881C103.742 31.5226 101.991 28.4978 97.7458 28.4978C94.2435 28.4978 91.9086 30.8858 91.9086 34.4412C91.9086 37.9966 94.2435 40.4376 97.7458 40.4376C99.6031 40.4376 101.407 39.7477 102.416 38.5272ZM103.636 23.6689C103.636 23.5097 103.795 23.3505 103.954 23.3505H109.42C109.579 23.3505 109.739 23.5097 109.739 23.6689V46.0094C109.739 46.1686 109.579 46.3278 109.42 46.3278H103.954C103.795 46.3278 103.636 46.1686 103.636 46.0094V44.3113C101.726 46.0625 99.4439 46.1156 97.4805 46.1686H97.1621C93.872 46.1686 91.1126 45.1604 89.0961 43.197C86.9735 41.1274 85.9122 38.1027 85.9122 34.4942C85.8591 27.4896 90.3166 22.9259 97.2151 22.9259H97.3213C99.497 22.9259 101.779 23.1382 103.583 24.624L103.636 23.6689ZM179.361 46.3278H184.879C185.039 46.3278 185.198 46.1686 185.198 46.0094V23.6689C185.198 23.5097 185.039 23.3505 184.879 23.3505H179.361C179.201 23.3505 179.042 23.5097 179.042 23.6689V46.0094C179.095 46.1686 179.201 46.3278 179.361 46.3278ZM185.622 16.6112C185.622 12.1006 178.83 12.1006 178.83 16.6112C178.777 21.0687 185.622 21.0687 185.622 16.6112Z" fill="currentColor"/>
              <path d="M233.063 20.9628C233.063 22.0772 232.373 22.9793 231.1 22.9793C229.826 22.9793 229.136 22.0772 229.136 20.9628C229.136 19.8484 229.826 18.9463 231.1 18.9463C232.373 18.9463 233.063 19.8484 233.063 20.9628ZM231.1 22.6609C232.161 22.6609 232.745 21.918 232.745 20.9628C232.745 20.0076 232.161 19.2647 231.1 19.2647C230.038 19.2647 229.455 20.0076 229.455 20.9628C229.455 21.918 230.038 22.6609 231.1 22.6609ZM231.418 21.2281C232.214 21.122 232.161 19.9015 231.259 19.9015H230.304V21.971H230.622V21.2281H231.047L231.683 21.971H232.055V21.918L231.418 21.2281ZM231.259 20.2199C231.79 20.2199 231.79 20.9628 231.259 20.9628H230.622V20.2199H231.259Z" fill="currentColor"/>
          </svg>
        </div>
        <h1 className='text-xl font-bold'>
          Miami Heat vs. Detroit Pistons
        </h1>
        <p className='text-sm '>
          Live on{' '}
          <a href="#" className='font-bold text-primary hover:underline underline-offset-4 decoration-1'>
            FOX sports</a>
        </p>
        <section className='grid grid-cols-2 gap-4 my-4 w-full'>
          <Card overline='Shop at Fanatics'>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Gear Up for Glory!
            </h2>
            <p className='mb-4 w-full'>
              Shop Miami Heat vs. Detroit Pistons at Fanatics.</p>
            <div className="flex gap-px relative z-10 w-full mt-auto">
              <a 
                href="https://www.fanatics.com/nba-miami-heat/o-3581+t-47252993+z-91038-2318474952"
                target="_blank"
                className="whitespace-nowrap flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-l-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                Miami Heat
              </a>
              <a 
                href="https://www.fanatics.com/nba-detroit-pistons/o-3514+t-70145116+z-91824-370750431"
                target="_blank"
                className="whitespace-nowrap flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-r-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                Detroit Pistons
              </a>
            </div>
          </Card>

          <Card overline='Bet at Fanatics' classNames='top-0'>
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
              <a 
                target='_blank'
                href="https://sportsbook.fanatics.com/"
                className="flex items-center justify-center text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                Bet $5, get $150
              </a>
            </div>
          </Card>

          <Card overline='ESPN Statistics'>
            <h2 className='text-4xl font-bold leading-0 tracking-tighter mr-auto mb-4'>
              Explore Team Insights!
            </h2>
            <p className='mb-4 w-full'>
              View analytics and statistics on 
              <a 
                target='_blan'
                href="https://www.espn.com/nba/game/_/gameId/401469221"
                className='font-bold text-primary hover:underline underline-offset-4 decoration-1'>
                www.espn.com</a>
            </p>
            <div className="relative z-10 w-full mt-auto">
              <a 
                target='_blank'
                href="https://www.espn.com/nba/game/_/gameId/401469221" 
                className="flex items-center justify-center gap-3 text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary text-on-primary duration-200 focus:ring-offset-2 focus:ring-inline-flex"
              >
                <span className="material-symbols-rounded" aria-hidden="true">scoreboard</span>
                View stats
              </a>
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
              onClick={() => console.log('open clip')}
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
              src="/video-still.png"
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
