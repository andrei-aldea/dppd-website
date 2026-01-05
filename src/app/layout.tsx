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
	title: 'From Prompt to Production',
	description: 'A Comparative Analysis of Modern Web Development Approaches'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className='dark'
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
			>
				<Navbar />
				<main className='flex-1 container mx-auto px-4 py-8'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
