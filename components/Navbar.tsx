import React, { FC, useEffect, useState } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
	const style = {
		navbar: 'navbar navbar-expand-lg py-3',
		navLinks: 'nav-link active',
	};

	return (
		<nav className={style.navbar}>
			{/* Mobile Offcanvas */}
			<Offcanvas style={style} />

			{/* Desktop Navbar */}
			<div className='container-fluid px-lg-5'>
				<Link className='navbar-brand' href='/'>
					<Image
						priority
						alt=''
						src='/images/logo/dark.png'
						height={50}
						width={50}
						className='bg-light bg-animate rounded-5 p-1 pointer'
					/>
				</Link>
				<a
					className='btn btn-dark d-lg-none'
					data-bs-toggle='offcanvas'
					href='#offcanvasExample'
					role='button'
					aria-controls='offcanvasExample'
				>
					<MenuIcon />
				</a>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					{/* Menu Items */}
					<MenuItems style={style} />
				</div>
			</div>
		</nav>
	);
}

type StyleProps = {
	navLinks: string;
	navbar: string;
};

export const MenuItems: FC<{ style: StyleProps }> = ({ style }) => {
	const { theme, setTheme } = useTheme();
	const [isActive, setIsActive] = useState(false);
	const [renderTheme, setRenderTheme] = useState<string | undefined>('dark');

	useEffect(() => {
		setRenderTheme(theme);
	}, [theme]);
	return (
		<>
			<ul className='navbar-nav me-auto mx-auto mb-2 mb-lg-0'>
				<li className='nav-item mx-lg-3'>
					<a className={style.navLinks}>
						<Link href={'/search'}>
							<h6 className='fs-6 pointer'>
								<WorkIcon className='navicon' /> Projects
							</h6>
						</Link>
					</a>
				</li>
				<li className='nav-item mx-lg-3'>
					<a
						className={style.navLinks}
						href={'https://github.com/sid86-dev'}
						target='_blank'
						rel='noreferrer'
					>
						<h6 className='fs-6'>
							<GitHubIcon /> Github
						</h6>
					</a>
				</li>
				<li className='nav-item mx-lg-3'>
					<a className={style.navLinks}>
						<Link href={'/meet'}>
							<h6 className='fs-6 pointer'>
								<MeetingRoomIcon /> Meet
							</h6>
						</Link>
					</a>
				</li>
			</ul>
			<div className='d-flex'>
				<button
					className='btn btn-dark mx-lg-3'
					type='submit'
					onClick={() => {
						setTheme(theme === 'dark' ? 'light' : 'dark');
						setIsActive(!isActive);
					}}
				>
					<motion.div
						animate={{
							rotate: isActive ? 180 : 0,
						}}
					>
						{renderTheme === 'dark' ? (
							<Brightness7Icon className='mb-1' />
						) : renderTheme === 'light' ? (
							<Brightness4Icon />
						) : (
							<Brightness7Icon className='mb-1' />
						)}
					</motion.div>
				</button>
				<button className='btn btn-dark mx-2' type='submit'>
					<TerminalIcon />
				</button>
			</div>
		</>
	);
};

export const Offcanvas: FC<{ style: StyleProps }> = ({ style }) => {
	return (
		<div
			className='offcanvas offcanvas-start d-lg-none w-75'
			tabIndex={-1}
			id='offcanvasExample'
			aria-labelledby='offcanvasExampleLabel'
		>
			<div className='offcanvas-header'>
				<Link className='navbar-brand' href='/'>
					<Image
						priority
						alt=''
						src='/images/logo/dark.png'
						height={50}
						width={50}
						className='bg-light bg-animate rounded-5 p-1 pointer'
					/>
				</Link>
				<button
					type='button'
					className='btn p-0 px-1 wrapper text-default'
					data-bs-dismiss='offcanvas'
					aria-label='Close'
				>
					<CloseIcon fontSize='large' />
				</button>
			</div>
			<div className='offcanvas-body'>
				<MenuItems style={style} />
			</div>
		</div>
	);
};

export default Navbar;
