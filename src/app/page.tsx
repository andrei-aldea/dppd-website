import HomePage from '@/components/home-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Acasă | De la Prompt la Producție',
	description: 'O analiză a evoluției dezvoltării web: de la servere legacy la cloud și AI.'
}

export default function Home() {
	return <HomePage />
}
