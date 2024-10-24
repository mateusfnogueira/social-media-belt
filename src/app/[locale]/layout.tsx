import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { Inter } from 'next/font/google'
import './globals.css'
import { InstallProviders } from '@/provider/install-providers'
import { getMessages, setRequestLocale } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function GlobalLayout({ children, params: { locale } }: Props) {
  setRequestLocale(locale)
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <InstallProviders locale={locale} messages={messages}>
          {children}
        </InstallProviders>
      </body>
    </html>
  )
}
