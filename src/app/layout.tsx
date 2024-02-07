import { Metadata } from 'next'

import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['100', '200', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Teslo | SHOP',
  description: 'Una tienda virtual de productos',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
