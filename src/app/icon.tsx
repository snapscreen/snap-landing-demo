import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--on-surface)',
        }}
      >
        <svg width="32" viewBox="0 0 176 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.01001 38.91C10.51 38.91 14.02 36.51 14.02 31.9V25.07H13.95V23.69H14.01V14.03H64.7401C69.7201 14.03 71.75 10.52 71.75 7.02C71.75 3.52 69.7201 0 64.7401 0H7.01001C3.32001 0 0 3.32 0 7.02V23.68H0.0100098V25.06H0V31.89C0 36.5 3.51001 38.9 7.01001 38.9V38.91Z" fill="currentColor"/>
            <path d="M64.7401 113.45H14.01V99.6V99.37H14.02V92.54C14.02 87.93 10.51 85.53 7.01001 85.53C3.51001 85.53 0 87.93 0 92.54V99.37H0.0700073V99.6H0V120.45C0 124.14 3.32001 127.46 7.01001 127.46H64.7401C69.7201 127.46 71.75 123.96 71.75 120.45C71.75 116.94 69.7201 113.44 64.7401 113.44V113.45Z" fill="currentColor"/>
            <path d="M175.16 23.68V7.02C175.16 3.32 171.84 0 168.15 0H110.42C105.44 0 103.41 3.51 103.41 7.02C103.41 10.53 105.44 14.03 110.42 14.03H161.15V23.69H161.21V25.07H161.14V31.9C161.14 36.51 164.65 38.91 168.15 38.91C171.65 38.91 175.16 36.51 175.16 31.9V25.07H175.15V23.69H175.16V23.68Z" fill="currentColor"/>
            <path d="M168.15 85.53C164.65 85.53 161.14 87.93 161.14 92.54V99.37H161.15V99.6V113.45H110.42C105.44 113.45 103.41 116.95 103.41 120.46C103.41 123.97 105.44 127.47 110.42 127.47H168.15C171.84 127.47 175.16 124.15 175.16 120.46V99.61H175.09V99.38H175.16V92.55C175.16 87.94 171.65 85.54 168.15 85.54V85.53Z" fill="currentColor"/>
            <rect x="70" y="34" width="36" height="60" rx="4" fill="#FF385C"/>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}