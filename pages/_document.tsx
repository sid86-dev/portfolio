import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='msapplication-starturl' content='/' />
				<link rel='icon' href='/images/favicon.ico' />
				<link rel='manifest' href='/manifest.webmanifest' />

				{/* open graph */}
				<meta property='twitter:image' content='/images/logo/dark.png'></meta>
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
				<meta name='theme-color' content='#fa7e44' />
				{/*nprogress*/}
				<html lang='en' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
					integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>

				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/images/apple-touch-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/images/apple-touch-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/images/apple-touch-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/images/apple-touch-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/images/apple-touch-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/images/apple-touch-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/images/apple-touch-icon-76x76.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/images/apple-touch-icon-152x152.png'
				/>
				<link
					rel='icon'
					type='image/png'
					href='favicon-196x196.png'
					sizes='196x196'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/images/favicon-96x96.png'
					sizes='96x96'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/images/favicon-32x32.png'
					sizes='32x32'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/images/favicon-16x16.png'
					sizes='16x16'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/images/favicon-128.png'
					sizes='128x128'
				/>
				<meta name='application-name' content='&nbsp;' />
				<meta name='msapplication-TileColor' content='#fa7e44' />
				<meta
					name='msapplication-TileImage'
					content='/images/mstile-144x144.png'
				/>
				<meta
					name='msapplication-square70x70logo'
					content='/images/mstile-70x70.png'
				/>
				<meta
					name='msapplication-square150x150logo'
					content='/images/mstile-150x150.png'
				/>
				<meta
					name='msapplication-wide310x150logo'
					content='/images/mstile-310x150.png'
				/>
				<meta
					name='msapplication-square310x310logo'
					content='/images/mstile-310x310.png'
				/>
				{/* favicons */}
			</Head>
			<body className='base'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
