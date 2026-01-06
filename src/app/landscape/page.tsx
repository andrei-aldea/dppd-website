'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { AlertTriangle, Lock, TrendingUp, Users, XCircle } from 'lucide-react'

export default function LandscapePage() {
	return (
		<div className='space-y-16 py-10'>
			{/* Header */}
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>The Landscape</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
					Understanding the market drivers and the hidden risks of modern development.
				</p>
			</FadeIn>

			{/* Market Drivers */}
			<section className='mx-auto grid max-w-5xl gap-8 md:grid-cols-2'>
				<FadeIn
					direction='right'
					delay={0.2}
				>
					<Card className='bg-background/50 border-primary/20 h-full backdrop-blur'>
						<CardHeader>
							<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10'>
								<TrendingUp className='h-6 w-6 text-emerald-500' />
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
				</FadeIn>

				<FadeIn
					direction='left'
					delay={0.4}
				>
					<Card className='bg-background/50 border-destructive/20 h-full backdrop-blur'>
						<CardHeader>
							<div className='bg-destructive/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg'>
								<Users className='text-destructive h-6 w-6' />
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
				</FadeIn>
			</section>

			{/* The Vendor Lock-In Crisis */}
			<section className='mx-auto max-w-5xl space-y-8'>
				<FadeIn
					delay={0.6}
					className='flex items-center gap-4'
				>
					<div className='bg-border h-px flex-1' />
					<h2 className='flex items-center gap-2 text-center text-2xl font-bold'>
						<AlertTriangle className='h-6 w-6 text-amber-500' />
						The Vendor Lock-In Crisis
					</h2>
					<div className='bg-border h-px flex-1' />
				</FadeIn>

				<div className='grid gap-6 md:grid-cols-3'>
					<FadeIn
						delay={0.8}
						className='h-full'
					>
						<div className='bg-card/50 h-full space-y-4 rounded-xl border p-6'>
							<Lock className='text-primary h-8 w-8' />
							<h3 className='text-lg font-semibold'>Proprietary Ecosystems</h3>
							<p className='text-muted-foreground text-sm'>
								Your application is intrinsically tied to the platform. You don&apos;t own the code, the infrastructure,
								or your destiny.
							</p>
						</div>
					</FadeIn>
					<FadeIn
						delay={1.0}
						className='h-full'
					>
						<div className='bg-card/50 h-full space-y-4 rounded-xl border p-6'>
							<XCircle className='text-primary h-8 w-8' />
							<h3 className='text-lg font-semibold'>No Exit Strategy</h3>
							<p className='text-muted-foreground text-sm'>
								Moving to a new system is &quot;complicated and expensive,&quot; often requiring a complete rewrite from
								scratch.
							</p>
						</div>
					</FadeIn>
					<FadeIn
						delay={1.2}
						className='h-full'
					>
						<div className='bg-card/50 h-full space-y-4 rounded-xl border p-6'>
							<div className='relative'>
								<TrendingUp className='text-primary h-8 w-8' />
								<XCircle className='text-destructive bg-background absolute -right-1 -bottom-1 h-4 w-4 rounded-full' />
							</div>
							<h3 className='text-lg font-semibold'>The Paradox of Success</h3>
							<p className='text-muted-foreground text-sm'>
								Success is punished. If you scale, you hit the wall. You cannot add custom features, and you cannot
								leave.
							</p>
						</div>
					</FadeIn>
				</div>
			</section>
		</div>
	)
}
