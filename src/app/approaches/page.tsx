import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, CheckCircle2, Clock, Code2, XCircle, Zap } from 'lucide-react'

export default function ApproachesPage() {
	return (
		<div className='space-y-10 py-10'>
			<section className='text-center space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight'>The Three Approaches</h1>
				<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
					A definitive comparison of modern web development models.
				</p>
			</section>

			<div className='grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch'>
				{/* Approach 1 */}
				<Card className='flex flex-col border-muted bg-background/50 hover:border-primary/50 transition-colors duration-300'>
					<CardHeader>
						<div className='mb-4 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center'>
							<Zap className='w-6 h-6 text-blue-500' />
						</div>
						<CardTitle className='text-2xl'>The Instant Application</CardTitle>
						<CardDescription className='text-base'>Pure No-Code (e.g., Durable)</CardDescription>
					</CardHeader>
					<CardContent className='flex-1 space-y-6'>
						<div className='space-y-2'>
							<div className='flex items-center gap-2 text-sm font-medium'>
								<Clock className='w-4 h-4 text-emerald-500' />
								<span>
									Time to Ship: <span className='text-foreground'>30 Seconds</span>
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm font-medium'>
								<CheckCircle2 className='w-4 h-4 text-emerald-500' />
								<span>
									Skill: <span className='text-foreground'>None</span>
								</span>
							</div>
						</div>

						<div className='space-y-2 pt-2 border-t text-sm text-muted-foreground'>
							<p>
								<strong>Focus:</strong> Speed above all else. Generates a complete site from a single prompt.
							</p>
							<div className='flex gap-2 items-start text-destructive/80'>
								<XCircle className='w-4 h-4 mt-0.5 shrink-0' />
								<p>High Vendor Lock-in. Zero portability.</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Badge
							variant='secondary'
							className='w-full justify-center py-1'
						>
							Ideal for Validation
						</Badge>
					</CardFooter>
				</Card>

				{/* Approach 2 */}
				<Card className='flex flex-col border-primary bg-primary/5 shadow-2xl shadow-primary/10 relative overflow-hidden transform md:-translate-y-4'>
					<div className='absolute top-0 right-0 p-3'>
						<Badge className='bg-primary hover:bg-primary'>New Standard</Badge>
					</div>
					<CardHeader>
						<div className='mb-4 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center'>
							<Bot className='w-6 h-6 text-primary' />
						</div>
						<CardTitle className='text-2xl'>The AI Co-Developer</CardTitle>
						<CardDescription className='text-base text-primary/80 font-medium'>
							AI-Assisted Low-Code (v0, Lovable)
						</CardDescription>
					</CardHeader>
					<CardContent className='flex-1 space-y-6'>
						<div className='space-y-2'>
							<div className='flex items-center gap-2 text-sm font-medium'>
								<Clock className='w-4 h-4 text-emerald-500' />
								<span>
									Time to Ship: <span className='text-foreground'>Days</span>
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm font-medium'>
								<CheckCircle2 className='w-4 h-4 text-orange-500' />
								<span>
									Skill: <span className='text-foreground'>Medium to High</span>
								</span>
							</div>
						</div>

						<div className='space-y-2 pt-2 border-t border-primary/20 text-sm text-muted-foreground'>
							<p>
								<strong>Focus:</strong> &quot;The Glass Box&quot;. Generates exportable, standardized code.
							</p>
							<div className='flex gap-2 items-start text-emerald-500'>
								<CheckCircle2 className='w-4 h-4 mt-0.5 shrink-0' />
								<p>Zero Lock-in. You own the code.</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Badge
							variant='default'
							className='w-full justify-center py-1 bg-primary text-primary-foreground'
						>
							Ideal for Startups & PMF
						</Badge>
					</CardFooter>
				</Card>

				{/* Approach 3 */}
				<Card className='flex flex-col border-muted bg-background/50 hover:border-primary/50 transition-colors duration-300'>
					<CardHeader>
						<div className='mb-4 w-12 h-12 rounded-lg bg-zinc-500/10 flex items-center justify-center'>
							<Code2 className='w-6 h-6 text-foreground' />
						</div>
						<CardTitle className='text-2xl'>The Architected Solution</CardTitle>
						<CardDescription className='text-base'>Full-Code (Next.js Framework)</CardDescription>
					</CardHeader>
					<CardContent className='flex-1 space-y-6'>
						<div className='space-y-2'>
							<div className='flex items-center gap-2 text-sm font-medium'>
								<Clock className='w-4 h-4 text-orange-500' />
								<span>
									Time to Ship: <span className='text-foreground'>Weeks/Months</span>
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm font-medium'>
								<CheckCircle2 className='w-4 h-4 text-red-500' />
								<span>
									Skill: <span className='text-foreground'>Expert</span>
								</span>
							</div>
						</div>

						<div className='space-y-2 pt-2 border-t text-sm text-muted-foreground'>
							<p>
								<strong>Focus:</strong> Total Control. Enterprise-grade scalability and performance.
							</p>
							<div className='flex gap-2 items-start text-emerald-500'>
								<CheckCircle2 className='w-4 h-4 mt-0.5 shrink-0' />
								<p>Unlimited Customization.</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Badge
							variant='secondary'
							className='w-full justify-center py-1'
						>
							Ideal for Enterprise
						</Badge>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
