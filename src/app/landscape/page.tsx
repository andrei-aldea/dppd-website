import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Layers, Lock, TrendingUp, Users, XCircle } from 'lucide-react'

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

			{/* Visual Object 2: The Customization Ceiling */}
			<section className='max-w-3xl mx-auto text-center space-y-8 pt-8'>
				<h2 className='text-2xl font-bold'>The Customization Ceiling</h2>

				{/* Visual Placeholder */}
				<div className='relative h-64 w-full bg-gradient-to-t from-muted/20 to-border/10 rounded-xl border-dashed border-2 border-border flex flex-col items-center justify-end overflow-hidden'>
					{/* The Ceiling Line */}
					<div className='absolute top-1/4 left-0 w-full h-[2px] bg-destructive/50 border-t border-destructive border-dashed flex items-center justify-center'>
						<span className='bg-background px-2 text-xs font-mono text-destructive uppercase tracking-widest border border-destructive/20 rounded-full translate-y-[-50%]'>
							Limit Reached
						</span>
					</div>

					{/* The Growth bars */}
					<div className='flex items-end justify-center gap-8 h-full pb-0 w-full px-10'>
						{/* No Code Bar - hits ceiling */}
						<div className='w-24 group relative h-full flex flex-col justify-end'>
							<div className='h-[75%] w-full bg-muted rounded-t-md relative overflow-hidden transition-all duration-500 hover:bg-muted/80'>
								<div className='absolute top-0 left-0 w-full bg-destructive/20 h-full animate-pulse' />
							</div>
							<span className='text-sm font-medium mt-2'>No-Code</span>
						</div>

						{/* Full Code Bar - breaks through */}
						<div className='w-24 group relative h-full flex flex-col justify-end'>
							<div className="h-[100%] w-full bg-primary rounded-t-md shadow-[0_0_20px_-5px_theme('colors.primary.DEFAULT')] relative overflow-hidden">
								<div className='absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary-foreground/20 to-transparent' />
							</div>
							<span className='text-sm font-medium mt-2 text-primary'>Full-Code</span>
						</div>
					</div>

					<Layers className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-muted-foreground/10' />
				</div>
				<p className='text-muted-foreground'>
					No-code platforms are &quot;ideal for smaller projects&quot; but fundamentally limited. You remain confined to
					pre-built templates and components.
				</p>
			</section>
		</div>
	)
}
