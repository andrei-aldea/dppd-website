'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Cpu, Globe, Layers, Server } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center space-y-24 py-10 overflow-hidden'>
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className='text-center space-y-6 max-w-4xl'
			>
				<h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
					From Prompt to Production
				</h1>
				<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto'>
					A Comparative Analysis of Modern Web Development Approaches
				</p>
				<div className='flex justify-center gap-4 pt-4'>
					<Link href='/landscape'>
						<Button
							size='lg'
							className='rounded-full'
						>
							Explore the Landscape <ArrowRight className='ml-2 h-4 w-4' />
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
				<Card className='bg-linear-to-br from-card to-background border-primary/20 shadow-lg shadow-primary/5'>
					<CardHeader className='text-center'>
						<CardTitle className='text-3xl font-bold text-primary'>The New Tri-Modal Spectrum</CardTitle>
						<CardDescription className='text-lg'>
							The binary of &quot;Code vs. No-Code&quot; has been shattered.
						</CardDescription>
					</CardHeader>
					<CardContent className='text-center prose dark:prose-invert max-w-none'>
						<p className='text-lg leading-relaxed text-muted-foreground'>
							The rapid emergence of generative AI has redrawn the map, replacing the old divide with a nuanced
							spectrum: <strong>Pure No-Code</strong>, <strong>AI-Assisted Low-Code</strong>, and{' '}
							<strong>Architected Full-Code</strong>.
						</p>
					</CardContent>
				</Card>
			</motion.section>

			{/* Evolution Timeline Visual Object */}
			<section className='w-full max-w-2xl mx-auto space-y-12'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className='text-center'
				>
					<h2 className='text-2xl font-bold tracking-tight'>The Evolution of Infrastructure</h2>
					<p className='text-muted-foreground mt-2'>From fixed boxes to intelligent systems</p>
				</motion.div>

				<div className='relative flex flex-col items-center'>
					{/* Vertical Line Background */}
					<div className='absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border z-0' />

					{/* Step 1: Legacy */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='relative z-10 flex flex-col items-center gap-4 py-8 bg-background max-w-xs'
					>
						<div className='relative flex items-center justify-center w-24 h-24 rounded-full bg-background border-4 border-muted-foreground/30 shadow-xl'>
							<Server className='w-10 h-10 text-muted-foreground' />
						</div>
						<div className='text-center bg-background px-4'>
							<h3 className='text-lg font-semibold'>Legacy Servers</h3>
							<p className='text-sm text-muted-foreground mt-1'>
								Fixed hardware boxes. Manual scaling. High maintenance and slow deployment cycles.
							</p>
							<span className='block mt-2 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest'>
								Past
							</span>
						</div>
					</motion.div>

					{/* Animated Connecting Path 1 */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 80 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.2 }}
						className='w-1 bg-linear-to-b from-muted-foreground/30 to-blue-500/30 relative z-0'
					/>

					{/* Step 2: The Cloud Era */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='relative z-10 flex flex-col items-center gap-4 py-8 bg-background max-w-xs'
					>
						<div className='relative flex items-center justify-center w-24 h-24 rounded-full bg-background border-4 border-blue-500/30 shadow-xl'>
							<Globe className='w-10 h-10 text-blue-500' />
						</div>
						<div className='text-center bg-background px-4'>
							<h3 className='text-lg font-semibold'>The Cloud Era</h3>
							<p className='text-sm text-muted-foreground mt-1'>
								Virtualization and SaaS. Elastic scaling and pay-as-you-go infrastructure.
							</p>
							<span className='block mt-2 text-xs font-bold text-blue-500/60 uppercase tracking-widest'>
								Transition
							</span>
						</div>
					</motion.div>

					{/* Animated Connecting Path 2 */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 80 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.6 }}
						className='w-1 bg-linear-to-b from-blue-500/30 to-purple-500/30 relative z-0'
					/>

					{/* Step 3: API Economy */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className='relative z-10 flex flex-col items-center gap-4 py-8 bg-background max-w-xs'
					>
						<div className='relative flex items-center justify-center w-24 h-24 rounded-full bg-background border-4 border-purple-500/30 shadow-xl'>
							<Layers className='w-10 h-10 text-purple-500' />
						</div>
						<div className='text-center bg-background px-4'>
							<h3 className='text-lg font-semibold'>The API Economy</h3>
							<p className='text-sm text-muted-foreground mt-1'>
								PaaS and Microservices. Modular components and third-party integrations.
							</p>
							<span className='block mt-2 text-xs font-bold text-purple-500/60 uppercase tracking-widest'>
								Recent Past
							</span>
						</div>
					</motion.div>

					{/* Animated Connecting Path 3 */}
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 80 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1.0 }}
						className='w-1 bg-linear-to-b from-purple-500/30 to-primary/50 relative z-0'
					/>

					{/* Step 4: Future */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 1.2 }}
						className='relative z-10 flex flex-col items-center gap-4 py-8 bg-background max-w-xs'
					>
						<div className='relative flex items-center justify-center w-28 h-28 rounded-full bg-background border-4 border-primary/50 shadow-[0_0_30px_-5px_var(--color-primary)]'>
							<div className='absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20' />
							<Cloud className='w-10 h-10 text-primary absolute top-6 left-6' />
							<Cpu className='w-8 h-8 text-sky-400 absolute bottom-6 right-6' />
						</div>
						<div className='text-center bg-background px-4'>
							<h3 className='text-xl font-bold text-primary'>Cloud + AI</h3>
							<p className='text-sm text-muted-foreground mt-1'>
								Intelligent, self-optimizing systems. Generative code and autonomous agents.
							</p>
							<span className='block mt-2 text-xs font-bold text-primary/80 uppercase tracking-widest'>
								Present & Future
							</span>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
