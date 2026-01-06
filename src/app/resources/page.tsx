import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, ExternalLink, FileSpreadsheet, FileText, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
	return (
		<div className='space-y-16 py-10 max-w-6xl mx-auto'>
			<section className='text-center space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight'>Resources</h1>
				<p className='text-xl text-muted-foreground'>Further reading, viewing, and tools for the modern developer.</p>
			</section>

			<div className='grid md:grid-cols-3 gap-8'>
				{/* YouTube Embed */}
				<div className='md:col-span-2 space-y-4'>
					<div className='flex items-center gap-2 mb-2'>
						<Youtube className='w-5 h-5 text-red-600' />
						<h2 className='text-xl font-semibold'>Featured Tutorial</h2>
					</div>
					<div className='aspect-video w-full rounded-xl overflow-hidden border bg-muted shadow-lg'>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/SjcWHzprkk0'
							title='Next.js Tutorial'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
					<p className='text-sm text-muted-foreground'>
						Learn how Next.js powers the &quot;Architected Solution&quot; for enterprise-grade web applications.
					</p>
				</div>

				{/* Bibliography Links */}
				<div className='space-y-4'>
					<div className='flex items-center gap-2 mb-2'>
						<BookOpen className='w-5 h-5 text-primary' />
						<h2 className='text-xl font-semibold'>Bibliography</h2>
					</div>
					<Card>
						<CardHeader>
							<CardTitle className='text-lg'>Key References</CardTitle>
							<CardDescription>Essential tools and communities.</CardDescription>
						</CardHeader>
						<CardContent className='grid gap-3'>
							<Button
								variant='outline'
								className='w-full justify-start h-auto py-4'
								asChild
							>
								<Link
									href='https://v0.dev'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex flex-col items-start gap-1'>
										<span className='flex items-center gap-2 font-semibold'>
											v0.dev <ExternalLink className='w-3 h-3' />
										</span>
										<span className='text-xs text-muted-foreground'>AI Generation Tool</span>
									</div>
								</Link>
							</Button>
							<Button
								variant='outline'
								className='w-full justify-start h-auto py-4'
								asChild
							>
								<Link
									href='https://nextjs.org'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex flex-col items-start gap-1'>
										<span className='flex items-center gap-2 font-semibold'>
											Next.js <ExternalLink className='w-3 h-3' />
										</span>
										<span className='text-xs text-muted-foreground'>The Framework</span>
									</div>
								</Link>
							</Button>
							<Button
								variant='outline'
								className='w-full justify-start h-auto py-4'
								asChild
							>
								<Link
									href='https://webdeveloper.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex flex-col items-start gap-1'>
										<span className='flex items-center gap-2 font-semibold'>
											WebDeveloper.com <ExternalLink className='w-3 h-3' />
										</span>
										<span className='text-xs text-muted-foreground'>Dev Community</span>
									</div>
								</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* PDF View Section */}
			<section className='space-y-4 pt-8 border-t'>
				<div className='flex items-center gap-2 mb-2'>
					<FileText className='w-5 h-5 text-primary' />
					<h2 className='text-xl font-semibold'>Read the Full Essay</h2>
				</div>
				<div className='w-full h-[800px] border rounded-xl bg-muted/20 overflow-hidden shadow-inner'>
					<iframe
						src='/A Comparative Analysis of Modern Web Development Approaches.pdf'
						className='w-full h-full border-none'
						title='A Comparative Analysis of Modern Web Development Approaches'
					/>
				</div>
				<div className='flex justify-center pt-4'>
					<Button
						asChild
						variant='outline'
					>
						<a
							href='/A Comparative Analysis of Modern Web Development Approaches.pdf'
							download
						>
							<FileText className='mr-2 h-4 w-4' />
							Download PDF
						</a>
					</Button>
				</div>
			</section>

			{/* Additional Course Materials */}
			<section className='space-y-4 pt-8 border-t'>
				<div className='flex items-center gap-2 mb-2'>
					<FileSpreadsheet className='w-5 h-5 text-emerald-600' />
					<h2 className='text-xl font-semibold'>Course Materials</h2>
				</div>
				<Card>
					<CardHeader>
						<CardTitle className='text-lg'>Management Decision Evaluation</CardTitle>
						<CardDescription>Module III Assessment Material</CardDescription>
					</CardHeader>
					<CardContent>
						<Button
							asChild
							variant='outline'
							className='w-full sm:w-auto'
						>
							<a
								href='/Evaluare Modul III - Managementul deciziilor manageriale.xlsx'
								download
							>
								<FileSpreadsheet className='mr-2 h-4 w-4 text-emerald-600' />
								Download Excel Evaluation
							</a>
						</Button>
					</CardContent>
				</Card>
			</section>
		</div>
	)
}
