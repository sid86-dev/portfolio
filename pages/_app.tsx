import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Store from "../context/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
