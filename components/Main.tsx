import Image from 'next/image';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Backdrop, CircularProgress } from '@mui/material';
import styles from '../styles/Main.module.scss';

function Main() {
	const [isLoading, setisLoading] = useState<boolean>(false);

	const downloadCV = () => {
		setisLoading(true);
		// using Java Script method to get PDF file
		fetch('Siddhartha_Roy.pdf').then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Siddhartha_Roy.pdf';
				alink.click();
				setisLoading(false);
			});
		});
	};

	return (
		<div className='container d-flex justify-content-center m-lg-5 pt-5 pt-md-2 px-lg-4'>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
			<div className='mx-lg-3 row  w-100 '>
				<div className='col-md-7'>
					<div className='d-flex flex-column'>
						{/* heading */}
						<h2>
							Hello! I am Siddharth, a{' '}
							<span className={styles.highlightText}>developer</span> based in
							India.
						</h2>

						{/* body */}
						<span className='fw-bolder fs-4 my-4'>
							I am an enthusiastic programmer eager to contribute to team
							success through hard work, attention to detail and excellent{' '}
							<span className={`${styles.highlightBox} px-1`}>
								organizational skills.
							</span>
						</span>

						{/* Link buttons */}
						<div className='d-flex my-3 my-md-5 mx-auto mx-md-0'>
							<a
								href='https://www.linkedin.com/in/sid86-dev/'
								target='_blank'
								rel='noreferrer'
							>
								{' '}
								<button type='button' className='btn btn-light px-md-4'>
									View Linkedin
								</button>
							</a>
							<button
								onClick={() => downloadCV()}
								type='button'
								className='btn btn-dark mx-4 px-md-4'
							>
								Download CV <FileDownloadOutlinedIcon />
							</button>
						</div>
					</div>
				</div>

				{/* Image section right side */}
				<div className='col-md-5 d-none d-md-block'>
					<Tilt>
						<Image
							className='rounded shadow-lg'
							src='/images/character.png'
							alt='portrait'
							height='400px'
							width='414px'
							priority
						/>
					</Tilt>
				</div>
			</div>
		</div>
	);
}

export default Main;
