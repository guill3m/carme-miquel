import { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './grid.module.css'

export default function Grid({
	aside,
	className,
	children,
	title,
}: Readonly<{
	aside?: ReactNode
	className?: string
	children: ReactNode
	title: string
}>) {
	return (
		<div className={clsx([className, styles.wrapper])}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.content}>{children}</div>
			<div className={styles.aside}>{aside}</div>
		</div>
	)
}
