import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { AlertTriangle, Lock, TrendingUp, Users, XCircle } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Peisajul Pieței | De la Prompt la Producție',
	description: 'Înțelege cererea explozivă, lipsa de dezvoltatori și criza vendor lock-in.'
}

export default function LandscapePage() {
	return (
		<div className='space-y-16 py-10'>
			{/* Header */}
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Peisajul</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
					Înțelegerea factorilor de piață și a riscurilor ascunse ale dezvoltării moderne.
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
							<CardTitle>Cerere Explozivă</CardTitle>
							<CardDescription>Afacerile sunt disperate să construiască.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								Există o cerere nesățioasă pentru software nou. Fiecare afacere are nevoie de o prezență digitală,
								instrumente interne și aplicații pentru clienți.
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
							<CardTitle>Lipsa de Dezvoltatori</CardTitle>
							<CardDescription>Resursele sunt blocajul.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								O lipsă globală persistentă de dezvoltatori calificați face ca dezvoltarea tradițională
								&quot;full-code&quot; să fie lentă și costisitoare pentru multe organizații.
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
						Criza Vendor Lock-In
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
							<h3 className='text-lg font-semibold'>Ecosisteme Proprietare</h3>
							<p className='text-muted-foreground text-sm'>
								Aplicația ta este intrinsec legată de platformă. Nu deții codul, infrastructura sau destinul tău.
							</p>
						</div>
					</FadeIn>
					<FadeIn
						delay={1.0}
						className='h-full'
					>
						<div className='bg-card/50 h-full space-y-4 rounded-xl border p-6'>
							<XCircle className='text-primary h-8 w-8' />
							<h3 className='text-lg font-semibold'>Fără Strategie de Ieșire</h3>
							<p className='text-muted-foreground text-sm'>
								Mutarea pe un sistem nou este &quot;complicată și costisitoare&quot;, necesitând adesea o rescriere
								completă de la zero.
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
							<h3 className='text-lg font-semibold'>Paradoxul Succesului</h3>
							<p className='text-muted-foreground text-sm'>
								Succesul este pedepsit. Dacă scalezi, te lovești de zid. Nu poți adăuga funcționalități personalizate și
								nu poți pleca.
							</p>
						</div>
					</FadeIn>
				</div>
			</section>
		</div>
	)
}
