import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import headerImg from '@/img/carme-miquel.png'
import { fontArvo, fontOpenSans } from '@/styles/fonts'
import '@/styles/globals.css'
import styles from './layout.module.css'
import colors from '@/styles/colors.module.css'
import IconSprite from '@/components/IconSprite'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  authors: [{ url: 'https://www.carmemiquel.com/humans.txt' }],
  other: {
    'format-detection': 'telephone=no', // Prevent iOS from formatting a book ISBN as a phone number
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  width: 'device-width',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear()

  return (
    <html
      className={[fontArvo.variable, fontOpenSans.variable].join(' ')}
      lang="ca"
    >
      <body>
        <header className={styles.header}>
          <nav>
            <Link href="/">
              <Image
                alt="Carme Miquel"
                height={80}
                priority
                src={headerImg}
                width={360}
              />
            </Link>
            <ul className={styles.menu}>
              <li className={[colors.autora].join(' ')}>
                <Link href="/autora">
                  <Icon name="autora" />
                  <span>Autora</span>
                </Link>
              </li>
              <li className={colors.entrevistes}>
                <Link href="/entrevistes">
                  <Icon name="entrevistes" />
                  <span>Entrevistes</span>
                </Link>
              </li>
              <li className={colors.llibres}>
                <Link href="/llibres">
                  <Icon name="llibres" />
                  <span>Llibres</span>
                </Link>
              </li>
              <li className={colors.articles}>
                <Link href="/articles">
                  <Icon name="articles" />
                  <span>Articles</span>
                </Link>
              </li>
              <li className={colors.videos}>
                <Link href="/videos">
                  <Icon name="videos" />
                  <span>Vídeos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>
            <small>
              © Carme Miquel, 2009&ndash;{year}.{' '}
              <Link href="/politica-de-privadesa">Política de privadesa</Link>.
            </small>
          </p>
          <p>
            <small>
              Disseny Web:{' '}
              <a href="https://www.guillemandreu.com" target="_blank">
                Guillem Andreu
              </a>
              .
            </small>
          </p>
        </footer>
        <IconSprite />
      </body>
    </html>
  )
}
