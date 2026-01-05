'use client'

import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
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
								<NavigationMenuLink asChild>
									<Link
										href={route.href}
										className={cn(
											navigationMenuTriggerStyle(),
											pathname === route.href && 'bg-accent/50 text-accent-foreground'
										)}
									>
										{route.label}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Mobile Menu */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='ghost'
							size='icon'
							className='md:hidden'
						>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<div className='flex flex-col gap-4 mt-8'>
							{routes.map((route) => (
								<Link
									key={route.href}
									href={route.href}
									className={cn(
										'text-lg font-medium transition-colors hover:text-primary',
										pathname === route.href ? 'text-primary' : 'text-muted-foreground'
									)}
								>
									{route.label}
								</Link>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
