import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { Bot, CheckCircle2, Clock, Code2, XCircle, Zap } from 'lucide-react'

export default function ApproachesPage() {
	return (
		<div className='space-y-10 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>The Three Approaches</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
					A definitive comparison of modern web development models.
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
							<CardTitle className='text-2xl'>The Instant Application</CardTitle>
							<CardDescription className='text-base'>Pure No-Code (e.g., Durable)</CardDescription>
						</CardHeader>
						<CardContent className='flex-1 space-y-6'>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<Clock className='h-4 w-4 text-emerald-500' />
									<span>
										Time to Ship: <span className='text-foreground'>30 Seconds</span>
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<CheckCircle2 className='h-4 w-4 text-emerald-500' />
									<span>
										Skill: <span className='text-foreground'>None</span>
									</span>
								</div>
							</div>

							<div className='text-muted-foreground space-y-2 border-t pt-2 text-sm'>
								<p>
									<strong>Focus:</strong> Speed above all else. Generates a complete site from a single prompt.
								</p>
								<div className='text-destructive/80 flex items-start gap-2'>
									<XCircle className='mt-0.5 h-4 w-4 shrink-0' />
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
				</FadeIn>

				{/* Approach 2 */}
				<FadeIn
					delay={0.4}
					className='h-full'
				>
					<Card className='border-primary bg-primary/5 shadow-primary/10 relative flex h-full transform flex-col overflow-hidden shadow-2xl md:-translate-y-4'>
						<div className='absolute top-0 right-0 p-3'>
							<Badge className='bg-primary hover:bg-primary'>New Standard</Badge>
						</div>
						<CardHeader>
							<div className='bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg'>
								<Bot className='text-primary h-6 w-6' />
							</div>
							<CardTitle className='text-2xl'>The AI Co-Developer</CardTitle>
							<CardDescription className='text-primary/80 text-base font-medium'>
								AI-Assisted Low-Code (v0, Lovable)
							</CardDescription>
						</CardHeader>
						<CardContent className='flex-1 space-y-6'>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<Clock className='h-4 w-4 text-emerald-500' />
									<span>
										Time to Ship: <span className='text-foreground'>Days</span>
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<CheckCircle2 className='h-4 w-4 text-orange-500' />
									<span>
										Skill: <span className='text-foreground'>Medium to High</span>
									</span>
								</div>
							</div>

							<div className='border-primary/20 text-muted-foreground space-y-2 border-t pt-2 text-sm'>
								<p>
									<strong>Focus:</strong> &quot;The Glass Box&quot;. Generates exportable, standardized code.
								</p>
								<div className='flex items-start gap-2 text-emerald-500'>
									<CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0' />
									<p>Zero Lock-in. You own the code.</p>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Badge
								variant='default'
								className='bg-primary text-primary-foreground w-full justify-center py-1'
							>
								Ideal for Startups & PMF
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
							<CardTitle className='text-2xl'>The Architected Solution</CardTitle>
							<CardDescription className='text-base'>Full-Code (Next.js Framework)</CardDescription>
						</CardHeader>
						<CardContent className='flex-1 space-y-6'>
							<div className='space-y-2'>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<Clock className='h-4 w-4 text-orange-500' />
									<span>
										Time to Ship: <span className='text-foreground'>Weeks/Months</span>
									</span>
								</div>
								<div className='flex items-center gap-2 text-sm font-medium'>
									<CheckCircle2 className='h-4 w-4 text-red-500' />
									<span>
										Skill: <span className='text-foreground'>Expert</span>
									</span>
								</div>
							</div>

							<div className='text-muted-foreground space-y-2 border-t pt-2 text-sm'>
								<p>
									<strong>Focus:</strong> Total Control. Enterprise-grade scalability and performance.
								</p>
								<div className='flex items-start gap-2 text-emerald-500'>
									<CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0' />
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
				</FadeIn>
			</div>
		</div>
	)
}
