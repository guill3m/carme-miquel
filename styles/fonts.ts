import { Arvo, Open_Sans } from 'next/font/google' // eslint-disable-line camelcase

export const fontArvo = Arvo({
  display: 'swap',
  fallback: ['serif'],
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
})

export const fontOpenSans = Open_Sans({
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700'],
})
