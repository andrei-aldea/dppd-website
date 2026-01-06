'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
	children: React.ReactNode
	className?: string
	delay?: number
	direction?: 'up' | 'down' | 'left' | 'right' | 'none'
	fullWidth?: boolean
}

export function FadeIn({ children, className, delay = 0, direction = 'up', fullWidth = true }: FadeInProps) {
	const directionOffset = {
		up: { y: 20, x: 0 },
		down: { y: -20, x: 0 },
		left: { x: 20, y: 0 },
		right: { x: -20, y: 0 },
		none: { x: 0, y: 0 }
	}

	return (
		<motion.div
			initial={{ opacity: 0, ...directionOffset[direction] }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
			className={className}
			style={{ width: fullWidth ? '100%' : 'auto' }}
		>
			{children}
		</motion.div>
	)
}
