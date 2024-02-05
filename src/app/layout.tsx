import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeScript from '../lib/ThemeScript';
import Providers from './providers'

import './globals.css'
import './globalicon.css'

const font = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: 'SnapOdds',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

