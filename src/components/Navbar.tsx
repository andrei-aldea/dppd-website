'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
	{ href: '/', label: 'Home' },
	{ href: '/landscape', label: 'The Landscape' },
	{ href: '/approaches', label: 'The Approaches' },
	{ href: '/analysis', label: 'Analysis' },
	{ href: '/strategy', label: 'Strategy' },
	{ href: '/resources', label: 'Resources' }
]

export function Navbar() {
	const pathname = usePathname()

	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
			<div className='container flex h-14 max-w-screen-2xl items-center mx-auto px-4'>
				<Link
					href='/'
					className='mr-6 flex items-center space-x-2'
				>
					<span className='hidden font-bold sm:inline-block'>From Prompt to Production</span>
				</Link>
				<NavigationMenu>
					<NavigationMenuList className='hidden md:flex'>
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
											pathname === route.href && 'bg-accent/50 text-accent-foreground'
										)}
									>
										{route.label}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
				{/* Mobile menu could go here, for now simple hidden on mobile */}
			</div>
		</header>
	)
}
