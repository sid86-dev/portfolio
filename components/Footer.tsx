import React, { useEffect, useState } from 'react';
import {
	NextDarkLogo,
	NextLightLogo,
	ReactLogo,
	TypescriptLogo,
} from './Icons/StackIcons';
import { useTheme } from 'next-themes';

export const Footer = () => {
	const { theme } = useTheme();
	const [renderTheme, setRenderTheme] = useState<string | undefined>('dark');

	useEffect(() => {
		setRenderTheme(theme);
	}, [theme]);

	return (
		<div className={'container py-5 text-center justify-content-center'}>
			{' '}
			<p>
				Find an issue with this page?{' '}
				<a
					href='https://github.com/sid86-dev/portfolio'
					target='_blank'
					className='text-primary text-decoration-none'
					rel='noreferrer'
				>
					Fix it on Github
				</a>
			</p>
			{'  '}
			<div className='d-flex justify-content-center'>
				<hr className='divider w-25' />
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
			<p>Copyright © 2022 sid86</p>
		</div>
	);
};
