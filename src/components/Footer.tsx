export function Footer() {
	return (
		<footer className='border-t py-6 md:py-0'>
			<div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row'>
				<p className='text-muted-foreground text-center text-sm leading-loose md:text-left'>
					Built based on &quot;A Comparative Analysis of Modern Web Development Approaches&quot;.
				</p>
				<div className='flex items-center gap-4'>
					<span className='text-muted-foreground text-sm'>© 2026 Aldea Andrei</span>
				</div>
			</div>
		</footer>
	)
}
