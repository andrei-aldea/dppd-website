import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { Building, Building2, Lightbulb, User } from 'lucide-react'

export default function StrategyPage() {
	return (
		<div className='mx-auto max-w-4xl space-y-16 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Strategic Recommendations</h1>
				<p className='text-muted-foreground text-xl'>
					Which approach is right for your project? The prescriptive guide.
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
									<div className='text-lg font-semibold'>For the Non-Technical Founder</div>
									<div className='text-muted-foreground text-sm font-normal'>Validating an Idea</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
							<div className='mb-4'>
								<Badge
									variant='outline'
									className='border-blue-500 bg-blue-500/10 text-blue-500'
								>
									Recommendation: Approach 1 (Pure No-Code)
								</Badge>
							</div>
							<p>
								The primary goal is speed, not longevity. Use a tool like Durable to create a landing page in 30
								minutes, test user interest with minimal cost.{' '}
								<strong>Be prepared to throw the entire website away</strong> if the idea is validated. Do not treat
								this as the first version of your product; treat it as a disposable market test.
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
									<div className='text-lg font-semibold'>For the Technical Startup</div>
									<div className='text-primary/80 text-sm font-normal'>Building an MVP</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
							<div className='mb-4'>
								<Badge className='bg-primary hover:bg-primary'>Recommendation: Approach 2 (AI-Assisted)</Badge>
							</div>
							<p>
								This is the new &quot;sweet spot&quot;. It provides the near-instant UI generation of no-code but
								crucially provides
								<strong>100% of the freedom and ownership of full-code</strong>. Avoid the &quot;vendor lock-in&quot;
								trap by building on a scalable Next.js foundation from day one.
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
									<div className='text-lg font-semibold'>For the Enterprise</div>
									<div className='text-muted-foreground text-sm font-normal'>Building a Core Product</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
							<div className='mb-4'>
								<Badge variant='secondary'>Recommendation: Approach 3 (Full-Code)</Badge>
							</div>
							<p>
								For mission-critical applications, the requirements for security, performance, and compliance outweigh
								initial speed. The foundation must be architected by an expert team, likely using Approach 2 tools
								within their workflow to accelerate development.
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
					<h2 className='text-2xl font-bold'>The Future Vision</h2>
				</div>

				<div className='grid gap-10 md:grid-cols-2'>
					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>Augmentation, Not Replacement</h3>
						<p className='text-muted-foreground leading-relaxed'>
							The evidence is unanimous: AI is not replacing web developers. It is an &quot;enhancement&quot; that
							speeds up coding and design, but it cannot replace human creativity and strategy. The future is a
							partnership where AI handles routine tasks, enabling developers to work smarter.
						</p>
					</div>
					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>From &quot;Coder&quot; to &quot;Architect&quot;</h3>
						<p className='text-muted-foreground leading-relaxed'>
							As AI automates low-level coding, the developer&apos;s role moves up the value stack. The new skillset
							focuses on
							<strong>Systems Architecture</strong>, <strong>Problem Framing</strong>, and{' '}
							<strong>AI Supervision</strong>. Developers become the human experts who provide the high-level vision
							that AI executes.
						</p>
					</div>
				</div>
			</FadeIn>
		</div>
	)
}
