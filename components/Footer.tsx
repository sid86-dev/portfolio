import React, { useEffect, useState } from 'react';
import {
	NextDarkLogo,
	NextLightLogo,
	ReactLogo,
	TypescriptLogo,
} from './Icons/StackIcons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { link } from 'fs';

export const Footer = () => {
	const { theme } = useTheme();
	const [renderTheme, setRenderTheme] = useState<string | undefined>('dark');

	useEffect(() => {
		setRenderTheme(theme);
	}, [theme]);

	const HelpFullLinks = () => {
		let links = [
			{ name: 'Home', destination: '/' },
			{ name: 'Terms', destination: '/terms' },
			{ name: 'Privacy', destination: '/privacy' },
			{ name: 'Snippet', destination: '/snippet' },
			{ name: 'Tags', destination: '/tags' },
		];
		return (
			<div className='flex flex-col text my-4 space-y-2'>
				<p className='text fs-5 fw-bold'>Helpfull Links</p>
				{links.map((link, index) => {
					return (
						<a
							key={index}
							href={link.destination}
							className='text-decoration-none'
						>
							<Link href={link.destination}>
								<span className='text'>
									{link.name}
									{links.length !== index + 1 && (
										<span className='mx-2'>|</span>
									)}
								</span>
							</Link>
						</a>
					);
				})}
			</div>
		);
	};

	return (
		<div className={'container py-5 text-center justify-content-center'}>
			{' '}
			<p
				style={{
					color: '#B7C4D1',
				}}
			>
				Find an issue with this page?{' '}
				<a
					href='https://github.com/sid86-dev/portfolio'
					target='_blank'
					className='text-decoration-underline'
					style={{
						color: '#cbdef8',
					}}
					rel='noreferrer'
				>
					Fix it on Github
				</a>
			</p>
			{'  '}
			<div className='d-flex justify-content-center'>
				<hr className=' w-25' />
			</div>
			<p>
				Need help? Email{' '}
				<span className='text-default'>sid86harth@gmail.com</span>{' '}
			</p>
			<p>
				Created with {''}
				<span className='mx-1 '>
					{renderTheme === 'dark' ? <NextDarkLogo /> : <NextLightLogo />}
				</span>
				<span className='mx-1 '>
					<ReactLogo />
				</span>
				<span className='mx-1 '>
					<TypescriptLogo />
				</span>
			</p>
			<HelpFullLinks />
			<p>Copyright © 2022 sid86.me</p>
		</div>
	);
};
