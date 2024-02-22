import { Footer, TopMenu } from '@/components'
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({
	weight: ['100', '200', '500', '700', '900'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'The WarMode - Comunidad del Temach',
	description:
		'¡Explora nuestro sitio web ahora y comienza tu viaje hacia el conocimiento y el éxito junto a "El Temach" y su vibrante comunidad!',
	icons: '/assets/images/logo.webp'
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='es'>
			<body
				className={`${inter.className} bg-gradient-to-l from-black via-stone-900 to-black min-h-screen text-white container px-4`}>
				<TopMenu />
				{children}
				<Footer />
			</body>
		</html>
	)
}
