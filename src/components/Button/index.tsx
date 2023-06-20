import React from 'react';
import { clsx } from 'clsx';

type ButtonColor = 'primary' | 'secondary' | 'extra';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: ButtonColor;
	children: JSX.Element | React.ReactNode;
}

export function Button({ color, children, className, ...props }: ButtonProps) {
	const styles = clsx('rounded border-2 p-2', {
		'bg-blue-400': color === 'primary',
		'bg-yellow-500': color === 'secondary',
		'bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent hover:animate-bounce':
			color === 'extra',
	});

	return (
		<button className={clsx(styles, className)} {...props}>
			{children}
		</button>
	);
}
