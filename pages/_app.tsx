import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Store from '../contexts/store';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../next-seo.config';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
	NProgress.configure({ showSpinner: false });
	Router.events.on('routeChangeStart', (url) => {
		NProgress.start();
	});
	Router.events.on('routeChangeComplete', (url) => {
		NProgress.done();
	});
	return (
		<>
			<GoogleAnalytics trackPageViews />
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
				/>
			</Head>
			<DefaultSeo {...SEO} />
			<ThemeProvider>
				<Store>
					<Component {...pageProps} />
				</Store>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
