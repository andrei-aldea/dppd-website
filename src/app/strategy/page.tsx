import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { Building, Building2, Lightbulb, User } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Strategie & Recomandări | De la Prompt la Producție',
	description: 'Ghid prescriptiv pentru alegerea abordării corecte în funcție de nevoile proiectului tău.'
}

export default function StrategyPage() {
	return (
		<div className='mx-auto max-w-4xl space-y-16 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Recomandări Strategice</h1>
				<p className='text-muted-foreground text-xl'>
					Ce abordare este potrivită pentru proiectul tău? Ghidul prescriptiv.
				</p>
			</FadeIn>

			{/* Recommendations Accordion */}
			<FadeIn
				delay={0.2}
				className='bg-card overflow-hidden rounded-xl border shadow-sm'
			>
				<Accordion
					type='single'
					collapsible
					className='w-full'
				>
					<AccordionItem
						value='item-1'
						className='bg-background/50 px-6'
					>
						<AccordionTrigger className='py-6 hover:no-underline'>
							<div className='flex items-center gap-4 text-left'>
								<User className='h-6 w-6 text-blue-500' />
								<div>
									<div className='text-lg font-semibold'>Pentru Fondatorul Non-Tehnic</div>
									<div className='text-muted-foreground text-sm font-normal'>Validarea unei Idei</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
							<div className='mb-4'>
								<Badge
									variant='outline'
									className='border-blue-500 bg-blue-500/10 text-blue-500'
								>
									Recomandare: Abordarea 1 (No-Code Pur)
								</Badge>
							</div>
							<p>
								Obiectivul principal este viteza, nu longevitatea. Folosește un instrument precum Durable pentru a crea
								un landing page în 30 de minute, testează interesul utilizatorilor cu costuri minime.{' '}
								<strong>Fii pregătit să arunci întregul site</strong> dacă ideea este validată. Nu trata aceasta ca
								prima versiune a produsului tău; trateaz-o ca un test de piață dispensabil.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						value='item-2'
						className='bg-primary/5 border-l-primary border-l-4 px-6'
					>
						<AccordionTrigger className='py-6 hover:no-underline'>
							<div className='flex items-center gap-4 text-left'>
								<Building className='text-primary h-6 w-6' />
								<div>
									<div className='text-lg font-semibold'>Pentru Startup-ul Tehnic</div>
									<div className='text-primary/80 text-sm font-normal'>Construirea unui MVP</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
							<div className='mb-4'>
								<Badge className='bg-primary hover:bg-primary'>Recomandare: Abordarea 2 (Asistat de AI)</Badge>
							</div>
							<p>
								Acesta este noul &quot;punct optim&quot;. Oferă generarea UI aproape instantanee a no-code, dar în mod
								crucial oferă
								<strong>100% din libertatea și proprietatea full-code</strong>. Evită capcana &quot;vendor lock-in&quot;
								construind o fundație scalabilă Next.js încă din prima zi.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						value='item-3'
						className='bg-background/50 px-6'
					>
						<AccordionTrigger className='py-6 hover:no-underline'>
							<div className='flex items-center gap-4 text-left'>
								<Building2 className='h-6 w-6 text-zinc-400' />
								<div>
									<div className='text-lg font-semibold'>Pentru Enterprise</div>
									<div className='text-muted-foreground text-sm font-normal'>Construirea unui Produs Central</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
							<div className='mb-4'>
								<Badge variant='secondary'>Recomandare: Abordarea 3 (Full-Code)</Badge>
							</div>
							<p>
								Pentru aplicații critice, cerințele de securitate, performanță și conformitate depășesc viteza inițială.
								Fundația trebuie să fie arhitecturată de o echipă de experți, probabil folosind instrumentele Abordării
								2 în fluxul de lucru pentru a accelera dezvoltarea.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</FadeIn>

			{/* Future Vision */}
			<FadeIn
				delay={0.4}
				className='space-y-8 border-t pt-10'
			>
				<div className='mb-6 flex items-center gap-2'>
					<Lightbulb className='h-6 w-6 text-yellow-500' />
					<h2 className='text-2xl font-bold'>Viziunea Viitoare</h2>
				</div>

				<div className='grid gap-10 md:grid-cols-2'>
					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>Augmentare, Nu Înlocuire</h3>
						<p className='text-muted-foreground leading-relaxed'>
							Dovezile sunt unanime: AI-ul nu înlocuiește dezvoltatorii web. Este o &quot;îmbunătățire&quot; care
							accelerează codarea și designul, dar nu poate înlocui creativitatea și strategia umană. Viitorul este un
							parteneriat în care AI-ul gestionează sarcinile de rutină, permițând dezvoltatorilor să lucreze mai
							inteligent.
						</p>
					</div>
					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>De la &quot;Coder&quot; la &quot;Arhitect&quot;</h3>
						<p className='text-muted-foreground leading-relaxed'>
							Pe măsură ce AI automatizează codarea de nivel scăzut, rolul dezvoltatorului urcă în lanțul valoric. Noul
							set de abilități se concentrează pe
							<strong>Arhitectura Sistemelor</strong>, <strong>Formularea Problemelor</strong> și{' '}
							<strong>Supervizarea AI</strong>. Dezvoltatorii devin experții umani care oferă viziunea de nivel înalt pe
							care AI-ul o execută.
						</p>
					</div>
				</div>
			</FadeIn>
		</div>
	)
}
