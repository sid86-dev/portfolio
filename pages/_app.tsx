import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Store from "../context/store";
import { Router } from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
