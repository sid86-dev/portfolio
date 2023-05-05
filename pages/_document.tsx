import { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../lib/Favicon';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='msapplication-starturl' content='/' />
				<link rel='icon' href='/images/favicon/favicon.ico' />
				<link rel='manifest' href='/manifest.webmanifest' />
				<meta name='theme-color' content='#fa7e44' />

				<html lang='en' />

				{/* open graph */}
				<meta
					property='twitter:image'
					content='https://sid86.me/_next/image?url=%2Fimages%2Flogo%2Fdark.png&w=128&q=75'
				></meta>

				{/* fonts */}
				<link
					rel='preload'
					as='font'
					href='/fonts/Sofiapro.ttf'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					as='font'
					href='/fonts/Cubano.ttf'
					crossOrigin='anonymous'
				/>

				{/*nprogress*/}
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
					integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>

				{/* favicons */}
				<Favicon />
			</Head>
			<body className='base'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
