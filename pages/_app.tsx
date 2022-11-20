import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Store from '../context/store';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../next-seo.config';

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
