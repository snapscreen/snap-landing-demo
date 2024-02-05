'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

function ResetButton() {
  const { theme, setTheme } = useTheme()

  return (
    <button 
      onClick={() => setTheme('system')} 
      style={{ opacity: theme === 'system' ? 1 : 0.4 }}
    >
      Auto
    </button>
  )
}

export default function ThemeSwitch() {
 
  const [ mounted, setMounted ] = useState(false)
  const { setTheme, theme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Lädt Modus Wechsel"
      priority={false}
      title="Lädt Modus Wechsel"
    />
  )

  if (resolvedTheme === 'dark') {
    return (
      <div className='flex gap-2'>
        <button 
          onClick={() => setTheme('light')}
          style={{ opacity: theme === 'system' ? 0.4 : 1 }}
        >
          Light
        </button> |
        <ResetButton />
      </div>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <div className='flex gap-2'>
        <button 
          onClick={() => setTheme('dark')}
          style={{ opacity: theme === 'system' ? 0.4 : 1 }}
        >
          Dark
        </button> |
        <ResetButton />
      </div>
    )
  }

}