'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Cpu, Globe, Layers, Server } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
	return (
		<div className='flex flex-col items-center justify-center space-y-24 overflow-hidden py-10'>
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className='max-w-4xl space-y-6 text-center'
			>
				<h1 className='from-foreground to-muted-foreground bg-linear-to-r bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl'>
					De la Prompt la Producție
				</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl md:text-2xl'>
					O Analiză Comparativă a Abordărilor Moderne de Dezvoltare Web
				</p>
				<div className='flex justify-center gap-4 pt-4'>
					<Link href='/landscape'>
						<Button
							size='lg'
							className='rounded-full'
						>
							Explorează Peisajul <ArrowRight className='ml-2 h-4 w-4' />
						</Button>
					</Link>
				</div>
			</motion.section>

			{/* Key Insight */}
			<motion.section
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.8 }}
				className='w-full max-w-5xl px-4'
			>
				<Card className='from-card to-background border-primary/20 shadow-primary/5 bg-linear-to-br shadow-lg'>
					<CardHeader className='text-center'>
						<CardTitle className='text-primary text-3xl font-bold'>Noul Spectru Tri-Modal</CardTitle>
						<CardDescription className='text-lg'>
							Binaritatea &quot;Code vs. No-Code&quot; a fost spulberată.
						</CardDescription>
					</CardHeader>
					<CardContent className='prose dark:prose-invert max-w-none text-center'>
						<p className='text-muted-foreground text-lg leading-relaxed'>
							Emergența rapidă a inteligenței artificiale generative a redesenat harta, înlocuind vechea diviziune cu un
							spectru nuanțat: <strong>No-Code Pur</strong>, <strong>Low-Code Asistat de AI</strong> și{' '}
							<strong>Full-Code Arhitecturat</strong>.
						</p>
					</CardContent>
				</Card>
			</motion.section>

			{/* Evolution Timeline Visual Object */}
			<section className='mx-auto w-full max-w-2xl space-y-12'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className='text-center'
				>
					<h2 className='text-2xl font-bold tracking-tight'>Evoluția Infrastructurii</h2>
					<p className='text-muted-foreground mt-2'>De la cutii fixe la sisteme inteligente</p>
				</motion.div>

				<div className='relative flex flex-col items-center'>
					{/* Vertical Line Background */}
					<div className='bg-border absolute top-0 bottom-0 left-1/2 z-0 w-px -translate-x-1/2' />

					{/* Step 1: Legacy */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='bg-background relative z-10 flex max-w-xs flex-col items-center gap-4 py-8'
					>
						<div className='bg-background border-muted-foreground/30 relative flex h-24 w-24 items-center justify-center rounded-full border-4 shadow-xl'>
							<Server className='text-muted-foreground h-10 w-10' />
						</div>
						<div className='bg-background px-4 text-center'>
							<h3 className='text-lg font-semibold'>Servere Legacy</h3>
							<p className='text-muted-foreground mt-1 text-sm'>
								Cutii hardware fixe. Scalare manuală. Mentenanță ridicată și cicluri de implementare lente.
							</p>
							<span className='text-muted-foreground/60 mt-2 block text-xs font-bold tracking-widest uppercase'>
								Trecut
							</span>
						</div>
					</motion.div>

					{/* Animated Connecting Path 1 */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 80 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.2 }}
						className='from-muted-foreground/30 relative z-0 w-1 bg-linear-to-b to-blue-500/30'
					/>

					{/* Step 2: The Cloud Era */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='bg-background relative z-10 flex max-w-xs flex-col items-center gap-4 py-8'
					>
						<div className='bg-background relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-500/30 shadow-xl'>
							<Globe className='h-10 w-10 text-blue-500' />
						</div>
						<div className='bg-background px-4 text-center'>
							<h3 className='text-lg font-semibold'>Era Cloud</h3>
							<p className='text-muted-foreground mt-1 text-sm'>
								Virtualizare și SaaS. Scalare elastică și infrastructură pay-as-you-go.
							</p>
							<span className='mt-2 block text-xs font-bold tracking-widest text-blue-500/60 uppercase'>Tranziție</span>
						</div>
					</motion.div>

					{/* Animated Connecting Path 2 */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 80 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.6 }}
						className='relative z-0 w-1 bg-linear-to-b from-blue-500/30 to-purple-500/30'
					/>

					{/* Step 3: API Economy */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className='bg-background relative z-10 flex max-w-xs flex-col items-center gap-4 py-8'
					>
						<div className='bg-background relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-purple-500/30 shadow-xl'>
							<Layers className='h-10 w-10 text-purple-500' />
						</div>
						<div className='bg-background px-4 text-center'>
							<h3 className='text-lg font-semibold'>Economia API</h3>
							<p className='text-muted-foreground mt-1 text-sm'>
								PaaS și Microservicii. Componente modulare și integrări terțe.
							</p>
							<span className='mt-2 block text-xs font-bold tracking-widest text-purple-500/60 uppercase'>
								Trecutul Recent
							</span>
						</div>
					</motion.div>

					{/* Animated Connecting Path 3 */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 80 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1.0 }}
						className='to-primary/50 relative z-0 w-1 bg-linear-to-b from-purple-500/30'
					/>

					{/* Step 4: Future */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 1.2 }}
						className='bg-background relative z-10 flex max-w-xs flex-col items-center gap-4 py-8'
					>
						<div className='bg-background border-primary/50 relative flex h-28 w-28 items-center justify-center rounded-full border-4 shadow-[0_0_30px_-5px_var(--color-primary)]'>
							<div className='bg-primary/10 absolute inset-0 animate-ping rounded-full opacity-20' />
							<Cloud className='text-primary absolute top-6 left-6 h-10 w-10' />
							<Cpu className='absolute right-6 bottom-6 h-8 w-8 text-sky-400' />
						</div>
						<div className='bg-background px-4 text-center'>
							<h3 className='text-primary text-xl font-bold'>Cloud + AI</h3>
							<p className='text-muted-foreground mt-1 text-sm'>
								Sisteme inteligente, auto-optimizate. Cod generativ și agenți autonomi.
							</p>
							<span className='text-primary/80 mt-2 block text-xs font-bold tracking-widest uppercase'>
								Prezent și Viitor
							</span>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
