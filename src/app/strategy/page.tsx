import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Building, Building2, Lightbulb, User } from 'lucide-react'

export default function StrategyPage() {
	return (
		<div className='space-y-16 py-10 max-w-4xl mx-auto'>
			<section className='text-center space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight'>Strategic Recommendations</h1>
				<p className='text-xl text-muted-foreground'>
					Which approach is right for your project? The prescriptive guide.
				</p>
			</section>

			{/* Recommendations Accordion */}
			<section className='bg-card border rounded-xl overflow-hidden shadow-sm'>
				<Accordion
					type='single'
					collapsible
					className='w-full'
				>
					<AccordionItem
						value='item-1'
						className='bg-background/50 px-6'
					>
						<AccordionTrigger className='hover:no-underline py-6'>
							<div className='flex items-center gap-4 text-left'>
								<User className='w-6 h-6 text-blue-500' />
								<div>
									<div className='font-semibold text-lg'>For the Non-Technical Founder</div>
									<div className='text-sm text-muted-foreground font-normal'>Validating an Idea</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='pb-6 text-muted-foreground leading-relaxed'>
							<div className='mb-4'>
								<Badge
									variant='outline'
									className='border-blue-500 text-blue-500 bg-blue-500/10'
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
						className='bg-primary/5 px-6 border-l-4 border-l-primary'
					>
						<AccordionTrigger className='hover:no-underline py-6'>
							<div className='flex items-center gap-4 text-left'>
								<Building className='w-6 h-6 text-primary' />
								<div>
									<div className='font-semibold text-lg'>For the Technical Startup</div>
									<div className='text-sm text-primary/80 font-normal'>Building an MVP</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='pb-6 text-muted-foreground leading-relaxed'>
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
						<AccordionTrigger className='hover:no-underline py-6'>
							<div className='flex items-center gap-4 text-left'>
								<Building2 className='w-6 h-6 text-zinc-400' />
								<div>
									<div className='font-semibold text-lg'>For the Enterprise</div>
									<div className='text-sm text-muted-foreground font-normal'>Building a Core Product</div>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className='pb-6 text-muted-foreground leading-relaxed'>
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
			</section>

			{/* Future Vision */}
			<section className='space-y-8 pt-10 border-t'>
				<div className='flex items-center gap-2 mb-6'>
					<Lightbulb className='w-6 h-6 text-yellow-500' />
					<h2 className='text-2xl font-bold'>The Future Vision</h2>
				</div>

				<div className='grid md:grid-cols-2 gap-10'>
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
			</section>
		</div>
	)
}
