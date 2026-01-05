'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Lock, TrendingUp, Users, XCircle } from 'lucide-react'

export default function LandscapePage() {
	return (
		<div className='space-y-16 py-10'>
			{/* Header */}
			<section className='text-center space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight'>The Landscape</h1>
				<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
					Understanding the market drivers and the hidden risks of modern development.
				</p>
			</section>

			{/* Market Drivers */}
			<section className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
				<Card className='bg-background/50 backdrop-blur border-primary/20'>
					<CardHeader>
						<div className='w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4'>
							<TrendingUp className='w-6 h-6 text-emerald-500' />
						</div>
						<CardTitle>Explosive Demand</CardTitle>
						<CardDescription>Businesses are desperate to build.</CardDescription>
					</CardHeader>
					<CardContent>
						<p className='text-muted-foreground'>
							There is an insatiable demand for new software. Every business needs a digital presence, internal tools,
							and customer-facing applications.
						</p>
					</CardContent>
				</Card>

				<Card className='bg-background/50 backdrop-blur border-destructive/20'>
					<CardHeader>
						<div className='w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4'>
							<Users className='w-6 h-6 text-destructive' />
						</div>
						<CardTitle>Developer Shortage</CardTitle>
						<CardDescription>Resources are the bottleneck.</CardDescription>
					</CardHeader>
					<CardContent>
						<p className='text-muted-foreground'>
							A persistent global shortage of skilled developers makes traditional &quot;full-code&quot; development
							slow and expensive for many organizations.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* The Vendor Lock-In Crisis */}
			<section className='max-w-5xl mx-auto space-y-8'>
				<div className='flex items-center gap-4'>
					<div className='h-px flex-1 bg-border' />
					<h2 className='text-2xl font-bold text-center flex items-center gap-2'>
						<AlertTriangle className='w-6 h-6 text-amber-500' />
						The Vendor Lock-In Crisis
					</h2>
					<div className='h-px flex-1 bg-border' />
				</div>

				<div className='grid md:grid-cols-3 gap-6'>
					<div className='space-y-4 p-6 rounded-xl border bg-card/50'>
						<Lock className='w-8 h-8 text-primary' />
						<h3 className='font-semibold text-lg'>Proprietary Ecosystems</h3>
						<p className='text-sm text-muted-foreground'>
							Your application is intrinsically tied to the platform. You don&apos;t own the code, the infrastructure,
							or your destiny.
						</p>
					</div>
					<div className='space-y-4 p-6 rounded-xl border bg-card/50'>
						<XCircle className='w-8 h-8 text-primary' />
						<h3 className='font-semibold text-lg'>No Exit Strategy</h3>
						<p className='text-sm text-muted-foreground'>
							Moving to a new system is &quot;complicated and expensive,&quot; often requiring a complete rewrite from
							scratch.
						</p>
					</div>
					<div className='space-y-4 p-6 rounded-xl border bg-card/50'>
						<div className='relative'>
							<TrendingUp className='w-8 h-8 text-primary' />
							<XCircle className='w-4 h-4 text-destructive absolute -bottom-1 -right-1 bg-background rounded-full' />
						</div>
						<h3 className='font-semibold text-lg'>The Paradox of Success</h3>
						<p className='text-sm text-muted-foreground'>
							Success is punished. If you scale, you hit the wall. You cannot add custom features, and you cannot leave.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
