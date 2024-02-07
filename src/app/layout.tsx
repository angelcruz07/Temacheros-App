import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
	weight: ['100', '200', '500', '700', '900'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Temacheros',
	description: 'Proyecto de la comunidad temach'
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='es'>
			<body
				className={`${inter.className} bg-black-fallback bg-gradient-custom min-h-screen text-white`}>
				{children}
			</body>
		</html>
	)
}
