import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { BookOpen, ExternalLink, FileSpreadsheet, FileText, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
	return (
		<div className='mx-auto max-w-6xl space-y-16 py-10'>
			<FadeIn className='space-y-4 text-center'>
				<h1 className='text-4xl font-bold tracking-tight'>Resources</h1>
				<p className='text-muted-foreground text-xl'>Further reading, viewing, and tools for the modern developer.</p>
			</FadeIn>

			<div className='grid gap-8 md:grid-cols-3'>
				{/* YouTube Embed */}
				<FadeIn
					delay={0.2}
					className='space-y-4 md:col-span-2'
				>
					<div className='mb-2 flex items-center gap-2'>
						<Youtube className='h-5 w-5 text-red-600' />
						<h2 className='text-xl font-semibold'>Featured Tutorial</h2>
					</div>
					<div className='bg-muted aspect-video w-full overflow-hidden rounded-xl border shadow-lg'>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/I1V9YWqRIeI?si=aHOJsFFAYQ6FBlPh'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
					<p className='text-muted-foreground text-sm'>
						Learn how Next.js powers the &quot;Architected Solution&quot; for enterprise-grade web applications.
					</p>
				</FadeIn>

				{/* Bibliography Links */}
				<FadeIn
					delay={0.4}
					className='space-y-4'
				>
					<div className='mb-2 flex items-center gap-2'>
						<BookOpen className='text-primary h-5 w-5' />
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
								className='h-auto w-full justify-start py-4'
								asChild
							>
								<Link
									href='https://v0.dev'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex flex-col items-start gap-1'>
										<span className='flex items-center gap-2 font-semibold'>
											v0.dev <ExternalLink className='h-3 w-3' />
										</span>
										<span className='text-muted-foreground text-xs'>AI Generation Tool</span>
									</div>
								</Link>
							</Button>
							<Button
								variant='outline'
								className='h-auto w-full justify-start py-4'
								asChild
							>
								<Link
									href='https://nextjs.org'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex flex-col items-start gap-1'>
										<span className='flex items-center gap-2 font-semibold'>
											Next.js <ExternalLink className='h-3 w-3' />
										</span>
										<span className='text-muted-foreground text-xs'>The Framework</span>
									</div>
								</Link>
							</Button>
							<Button
								variant='outline'
								className='h-auto w-full justify-start py-4'
								asChild
							>
								<Link
									href='https://webdeveloper.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex flex-col items-start gap-1'>
										<span className='flex items-center gap-2 font-semibold'>
											WebDeveloper.com <ExternalLink className='h-3 w-3' />
										</span>
										<span className='text-muted-foreground text-xs'>Dev Community</span>
									</div>
								</Link>
							</Button>
						</CardContent>
					</Card>
				</FadeIn>
			</div>

			{/* PDF View Section */}
			<FadeIn
				delay={0.6}
				className='space-y-4 border-t pt-8'
			>
				<div className='mb-2 flex items-center gap-2'>
					<FileText className='text-primary h-5 w-5' />
					<h2 className='text-xl font-semibold'>Read the Full Essay</h2>
				</div>
				<div className='bg-muted/20 h-[800px] w-full overflow-hidden rounded-xl border shadow-inner'>
					<iframe
						src='/A Comparative Analysis of Modern Web Development Approaches.pdf'
						className='h-full w-full border-none'
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
			</FadeIn>

			{/* Additional Course Materials */}
			<FadeIn
				delay={0.8}
				className='space-y-4 border-t pt-8'
			>
				<div className='mb-2 flex items-center gap-2'>
					<FileSpreadsheet className='h-5 w-5 text-emerald-600' />
					<h2 className='text-xl font-semibold'>Course Materials</h2>
				</div>
				<Card>
					<CardHeader>
						<CardTitle className='text-lg'>Management Decision Evaluation</CardTitle>
						<CardDescription>Module III Assessment Assessment Material</CardDescription>
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
			</FadeIn>
		</div>
	)
}
