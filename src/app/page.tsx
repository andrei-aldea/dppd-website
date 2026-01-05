import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Cloud, Cpu, Server } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center space-y-20 py-10'>
			{/* Hero Section */}
			<section className='text-center space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700'>
				<h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
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
			</section>

			{/* Key Insight */}
			<section className='w-full max-w-5xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200'>
				<Card className='bg-gradient-to-br from-card to-background border-primary/20 shadow-lg shadow-primary/5'>
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
			</section>

			{/* Evolution Timeline Visual Object */}
			<section className='w-full max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300'>
				<div className='text-center'>
					<h2 className='text-2xl font-bold tracking-tight'>The Evolution of Infrastructure</h2>
					<p className='text-muted-foreground mt-2'>From fixed boxes to intelligent systems</p>
				</div>

				<div className='relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-xl bg-accent/20 border border-border'>
					{/* Node 1: Past */}
					<div className='flex flex-col items-center gap-4 group'>
						<div className='relative flex items-center justify-center w-24 h-24 rounded-full bg-background border-4 border-muted-foreground/30 transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110 shadow-xl'>
							<Server className='w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors' />
						</div>
						<div className='text-center'>
							<h3 className='text-lg font-semibold'>Legacy Servers</h3>
							<span className='text-xs text-muted-foreground uppercase tracking-widest'>Past</span>
						</div>
					</div>

					{/* Connector */}
					<div className='hidden md:flex flex-1 items-center justify-center'>
						<div className='h-[2px] w-full bg-gradient-to-r from-muted-foreground/30 to-primary/50 mx-4 relative'>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_theme('colors.primary.DEFAULT')] animate-pulse" />
						</div>
					</div>

					{/* Node 2: Present/Future */}
					<div className='flex flex-col items-center gap-4 group'>
						<div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-background border-4 border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:scale-110 shadow-[0_0_30px_-5px_theme('colors.primary.DEFAULT')]">
							<div className='absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20' />
							<Cloud className='w-8 h-8 text-primary absolute top-5 left-5' />
							<Cpu className='w-8 h-8 text-sky-400 absolute bottom-5 right-5' />
						</div>
						<div className='text-center'>
							<h3 className='text-lg font-semibold'>Cloud + AI</h3>
							<span className='text-xs text-primary uppercase tracking-widest'>Present & Future</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
