import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { Bot, CheckCircle2, Clock, Code2, XCircle, Zap } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Abordările de Dezvoltare | De la Prompt la Producție',
	description: 'Explorează cele trei modele de dezvoltare: Instant, Asistat de AI și Arhitecturat.'
}

export default function ApproachesPage() {
	return (
		<div className='space-y-10 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Cele Trei Abordări</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
					O comparație definitivă a modelelor moderne de dezvoltare web.
				</p>
			</FadeIn>

			<div className='mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-3'>
				{/* Approach 1 */}
				<FadeIn
					delay={0.2}
					className='h-full'
				>
					<Card className='border-muted bg-background/50 hover:border-primary/50 flex h-full flex-col transition-colors duration-300'>
						<CardHeader>
							<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10'>
								<Zap className='h-6 w-6 text-blue-500' />
							</div>
							<CardTitle className='text-2xl'>Aplicația Instantanee</CardTitle>
							<CardDescription className='text-base'>No-Code Pur (ex. Durable)</CardDescription>
						</CardHeader>
						<CardContent className='flex-1 space-y-6'>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<Clock className='h-4 w-4 text-emerald-500' />
									<span>
										Timp de Livrare: <span className='text-foreground'>30 Secunde</span>
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<CheckCircle2 className='h-4 w-4 text-emerald-500' />
									<span>
										Abilități: <span className='text-foreground'>Niciuna</span>
									</span>
								</div>
							</div>

							<div className='text-muted-foreground space-y-2 border-t pt-2 text-sm'>
								<p>
									<strong>Focus:</strong> Viteză mai presus de orice. Generează un site complet dintr-un singur prompt.
								</p>
								<div className='text-destructive/80 flex items-start gap-2'>
									<XCircle className='mt-0.5 h-4 w-4 shrink-0' />
									<p>Vendor Lock-in Ridicat. Portabilitate zero.</p>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Badge
								variant='secondary'
								className='w-full justify-center py-1'
							>
								Ideal pentru Validare
							</Badge>
						</CardFooter>
					</Card>
				</FadeIn>

				{/* Approach 2 */}
				<FadeIn
					delay={0.4}
					className='h-full'
				>
					<Card className='border-primary bg-primary/5 shadow-primary/10 relative flex h-full transform flex-col overflow-hidden shadow-2xl md:-translate-y-4'>
						<div className='absolute top-0 right-0 p-3'>
							<Badge className='bg-primary hover:bg-primary'>Noul Standard</Badge>
						</div>
						<CardHeader>
							<div className='bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg'>
								<Bot className='text-primary h-6 w-6' />
							</div>
							<CardTitle className='text-2xl'>Co-Dezvoltatorul AI</CardTitle>
							<CardDescription className='text-primary/80 text-base font-medium'>
								Low-Code Asistat de AI (v0, Lovable)
							</CardDescription>
						</CardHeader>
						<CardContent className='flex-1 space-y-6'>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<Clock className='h-4 w-4 text-emerald-500' />
									<span>
										Timp de Livrare: <span className='text-foreground'>Ziua</span>
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<CheckCircle2 className='h-4 w-4 text-orange-500' />
									<span>
										Abilități: <span className='text-foreground'>Medii spre Ridicate</span>
									</span>
								</div>
							</div>

							<div className='border-primary/20 text-muted-foreground space-y-2 border-t pt-2 text-sm'>
								<p>
									<strong>Focus:</strong> &quot;Cutia de Sticlă&quot;. Generează cod exportabil, standardizat.
								</p>
								<div className='flex items-start gap-2 text-emerald-500'>
									<CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0' />
									<p>Zero Lock-in. Deții codul.</p>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Badge
								variant='default'
								className='bg-primary text-primary-foreground w-full justify-center py-1'
							>
								Ideal pentru Startups & PMF
							</Badge>
						</CardFooter>
					</Card>
				</FadeIn>

				{/* Approach 3 */}
				<FadeIn
					delay={0.6}
					className='h-full'
				>
					<Card className='border-muted bg-background/50 hover:border-primary/50 flex h-full flex-col transition-colors duration-300'>
						<CardHeader>
							<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-500/10'>
								<Code2 className='text-foreground h-6 w-6' />
							</div>
							<CardTitle className='text-2xl'>Soluția Arhitecturată</CardTitle>
							<CardDescription className='text-base'>Full-Code (Framework Next.js)</CardDescription>
						</CardHeader>
						<CardContent className='flex-1 space-y-6'>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<Clock className='h-4 w-4 text-orange-500' />
									<span>
										Timp de Livrare: <span className='text-foreground'>Săptămâni/Luni</span>
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<CheckCircle2 className='h-4 w-4 text-red-500' />
									<span>
										Abilități: <span className='text-foreground'>Expert</span>
									</span>
								</div>
							</div>

							<div className='text-muted-foreground space-y-2 border-t pt-2 text-sm'>
								<p>
									<strong>Focus:</strong> Control Total. Scalabilitate și performanță de nivel enterprise.
								</p>
								<div className='flex items-start gap-2 text-emerald-500'>
									<CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0' />
									<p>Personalizare Nelimitată.</p>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Badge
								variant='secondary'
								className='w-full justify-center py-1'
							>
								Ideal pentru Enterprise
							</Badge>
						</CardFooter>
					</Card>
				</FadeIn>
			</div>
		</div>
	)
}
