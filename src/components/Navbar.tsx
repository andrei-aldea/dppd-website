'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const routes = [
	{ href: '/', label: 'Acasă' },
	{ href: '/landscape', label: 'Peisajul' },
	{ href: '/approaches', label: 'Abordările' },
	{ href: '/analysis', label: 'Analiză' },
	{ href: '/strategy', label: 'Strategie' },
	{ href: '/resources', label: 'Resurse' }
]

export function Navbar() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<header className='border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur'>
			<div className='container mx-auto flex h-14 items-center justify-between px-4'>
				{/* Logo / Title */}
				<Link
					href='/'
					className='mr-6 flex items-center space-x-2'
				>
					<span className='font-bold'>De la Prompt la Producție</span>
				</Link>

				{/* Desktop Navigation */}
				<NavigationMenu className='hidden md:flex'>
					<NavigationMenuList>
						{routes.map((route) => (
							<NavigationMenuItem key={route.href}>
								<Link
									href={route.href}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											'bg-transparent',
											pathname === route.href && 'text-primary font-bold'
										)}
									>
										{route.label}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Mobile Menu Trigger */}
				<button
					className='md:hidden'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label='Toggle menu'
				>
					{isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<div className='bg-background border-b shadow-lg md:hidden'>
					<nav className='container mx-auto flex flex-col space-y-2 p-4 pb-6'>
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={cn(
									'hover:text-primary py-2 text-sm font-medium transition-colors',
									pathname === route.href ? 'text-primary font-bold' : 'text-muted-foreground'
								)}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{route.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	)
}
