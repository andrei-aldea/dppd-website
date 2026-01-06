import { FadeIn } from '@/components/ui/fade-in'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AlertTriangle, Check } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Analiză Comparativă | De la Prompt la Producție',
	description: 'Comparație directă între No-Code, AI-Assisted și Full-Code.'
}

export default function AnalysisPage() {
	const data = [
		{
			metric: 'Timp de Livrare',
			noCode: 'Minute / Ore',
			aiAssisted: 'Zile',
			fullCode: 'Săptămâni / Luni'
		},
		{
			metric: 'Abilități Necesare',
			noCode: 'Niciuna',
			aiAssisted: 'Ridicate (Necesar Dev)',
			fullCode: 'Expert'
		},
		{
			metric: 'Risc de Lock-in',
			noCode: 'Extrem de Ridicat',
			aiAssisted: 'Niciunul (Exportabil)',
			fullCode: 'Niciunul (Proprietate)'
		},
		{
			metric: 'Scalabilitate',
			noCode: 'Scăzută',
			aiAssisted: 'Foarte Ridicată',
			fullCode: 'Foarte Ridicată'
		},
		{
			metric: 'Obiectiv Principal',
			noCode: 'Prezență Instantanee',
			aiAssisted: 'UI/App Accelerat',
			fullCode: 'Sistem Personalizat'
		}
	]

	return (
		<div className='space-y-10 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Analiză Comparativă</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
					O comparație directă a datelor celor trei modele de dezvoltare.
				</p>
			</FadeIn>

			<FadeIn
				delay={0.2}
				className='bg-card/50 mx-auto max-w-5xl overflow-hidden rounded-xl border backdrop-blur'
			>
				<Table>
					<TableCaption className='pb-4'>Tabelul 1: Matricea Comparativă</TableCaption>
					<TableHeader className='bg-muted/50'>
						<TableRow>
							<TableHead className='w-[200px] text-lg'>Metrică</TableHead>
							<TableHead className='text-lg'>No-Code Pur</TableHead>
							<TableHead className='text-primary bg-primary/5 text-lg font-bold'>Asistat de AI (Recomandat)</TableHead>
							<TableHead className='text-lg'>Full-Code</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((row) => (
							<TableRow
								key={row.metric}
								className='items-center text-base'
							>
								<TableCell className='text-muted-foreground font-medium'>{row.metric}</TableCell>

								{/* No Code Cell Logic */}
								<TableCell>
									{row.metric === 'Risc de Lock-in' ? (
										<div className='text-destructive flex items-center gap-2'>
											<AlertTriangle className='h-4 w-4' />
											<span className='font-bold'>{row.noCode}</span>
										</div>
									) : (
										row.noCode
									)}
								</TableCell>

								{/* AI Assisted Cell Logic */}
								<TableCell className='bg-primary/5 font-medium'>
									{row.metric === 'Risc de Lock-in' ? (
										<div className='flex items-center gap-2 text-emerald-500'>
											<Check className='h-4 w-4' />
											<span>{row.aiAssisted}</span>
										</div>
									) : (
										row.aiAssisted
									)}
								</TableCell>

								{/* Full Code Cell Logic */}
								<TableCell>
									{row.metric === 'Risc de Lock-in' ? (
										<div className='flex items-center gap-2 text-emerald-500'>
											<Check className='h-4 w-4' />
											<span>{row.fullCode}</span>
										</div>
									) : (
										row.fullCode
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</FadeIn>

			<FadeIn
				delay={0.4}
				className='mx-auto max-w-3xl space-y-4 pt-8 text-center'
			>
				<h3 className='text-2xl font-semibold'>Concluzie Cheie</h3>
				<p className='text-muted-foreground leading-relaxed'>
					În timp ce <strong>No-Code Pur</strong> oferă viteză inegalabilă, <strong>Riscul de Lock-in</strong> îl face
					viabil doar pentru prototipuri de unică folosință. Dezvoltarea <strong>Asistată de AI</strong> apare ca
					punctul strategic optim, oferind viteză ridicată <em>fără</em> a sacrifica proprietatea sau scalabilitatea.
				</p>
			</FadeIn>
		</div>
	)
}
