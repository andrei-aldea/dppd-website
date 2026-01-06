import { FadeIn } from '@/components/ui/fade-in'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AlertTriangle, Check } from 'lucide-react'

export default function AnalysisPage() {
	const data = [
		{
			metric: 'Time to Ship',
			noCode: 'Minutes / Hours',
			aiAssisted: 'Days',
			fullCode: 'Weeks / Months'
		},
		{
			metric: 'Skill Required',
			noCode: 'None',
			aiAssisted: 'High (Dev Required)',
			fullCode: 'Expert'
		},
		{
			metric: 'Lock-in Risk',
			noCode: 'Extremely High',
			aiAssisted: 'None (Exportable)',
			fullCode: 'None (Ownership)'
		},
		{
			metric: 'Scalability',
			noCode: 'Low',
			aiAssisted: 'Very High',
			fullCode: 'Very High'
		},
		{
			metric: 'Primary Goal',
			noCode: 'Instant Presence',
			aiAssisted: 'Accelerated UI/App',
			fullCode: 'Bespoke System'
		}
	]

	return (
		<div className='space-y-10 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Comparative Analysis</h1>
				<p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
					A head-to-head data comparison of the three development models.
				</p>
			</FadeIn>

			<FadeIn
				delay={0.2}
				className='bg-card/50 mx-auto max-w-5xl overflow-hidden rounded-xl border backdrop-blur'
			>
				<Table>
					<TableCaption className='pb-4'>Table 1: The Comparative Matrix</TableCaption>
					<TableHeader className='bg-muted/50'>
						<TableRow>
							<TableHead className='w-[200px] text-lg'>Metric</TableHead>
							<TableHead className='text-lg'>Pure No-Code</TableHead>
							<TableHead className='text-primary bg-primary/5 text-lg font-bold'>AI-Assisted (Recommended)</TableHead>
							<TableHead className='text-lg'>Full-Code</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((row) => (
							<TableRow
								key={row.metric}
								className='items-center text-base'
							>
								<TableCell className='text-muted-foreground font-medium'>{row.metric}</TableCell>

								{/* No Code Cell Logic */}
								<TableCell>
									{row.metric === 'Lock-in Risk' ? (
										<div className='text-destructive flex items-center gap-2'>
											<AlertTriangle className='h-4 w-4' />
											<span className='font-bold'>{row.noCode}</span>
										</div>
									) : (
										row.noCode
									)}
								</TableCell>

								{/* AI Assisted Cell Logic */}
								<TableCell className='bg-primary/5 font-medium'>
									{row.metric === 'Lock-in Risk' ? (
										<div className='flex items-center gap-2 text-emerald-500'>
											<Check className='h-4 w-4' />
											<span>{row.aiAssisted}</span>
										</div>
									) : (
										row.aiAssisted
									)}
								</TableCell>

								{/* Full Code Cell Logic */}
								<TableCell>
									{row.metric === 'Lock-in Risk' ? (
										<div className='flex items-center gap-2 text-emerald-500'>
											<Check className='h-4 w-4' />
											<span>{row.fullCode}</span>
										</div>
									) : (
										row.fullCode
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</FadeIn>

			<FadeIn
				delay={0.4}
				className='mx-auto max-w-3xl space-y-4 pt-8 text-center'
			>
				<h3 className='text-2xl font-semibold'>Key Takeaway</h3>
				<p className='text-muted-foreground leading-relaxed'>
					While <strong>Pure No-Code</strong> offers unmatched speed, the <strong>Lock-in Risk</strong> makes it viable
					only for disposable prototypes.
					<strong>AI-Assisted</strong> development emerges as the strategic sweet spot, offering high velocity{' '}
					<em>without</em> sacrificing ownership or scalability.
				</p>
			</FadeIn>
		</div>
	)
}
