import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'De la Prompt la Producție',
	description: 'O Analiză Comparativă a Abordărilor Moderne de Dezvoltare Web'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ro'
			className='dark'
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex min-h-screen flex-col antialiased`}
			>
				<Navbar />
				<main className='container mx-auto flex-1 px-4 py-8'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
