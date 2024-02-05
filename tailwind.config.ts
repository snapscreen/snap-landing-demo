import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'background': 'var(--background)',
        'borderColor': 'var(--border)',
        'surface': 'var(--surface)',
        'on-surface': 'var(--on-surface)',
        'on-primary': 'var(--on-primary)',
      },
      spacing: {
        'x': 'var(--space-x)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
