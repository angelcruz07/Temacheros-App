import { TopMenu } from '@/components'
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['100', '200', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Temacheros',
  description: 'Proyecto de la comunidad temach',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body
        className={`${inter.className} bg-gradient-to-br from-bg-deg  from-45% to-bg-deg-2 min-h-screen text-white container px-4`}
      >
        <TopMenu />
        {children}
      </body>
    </html>
  )
}
