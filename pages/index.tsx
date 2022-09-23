import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { Projects } from "../components/Projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "../components/Footer";
import useStore from "../store";

const Home: NextPage = () => {

  const {isDark } = useStore();

  // Create a client
  const queryClient = new QueryClient();

  const style = {
    body: isDark ? "bg-dark text-white" : "bg-gray text-dark"
  };

  return (
    <div className={style.body}>
      <Head>
        <title>Sid86</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>

      <Navbar />

      {/* landing intro section */}

      <div className="container d-flex justify-content-center m-lg-5 py-5 px-lg-4">
        <Main />
      </div>

      <hr className="divider" />

      {/* Project showcase section */}

      <div className="container justify-content-center py-3">
        <h2 className="text-center">Projects</h2>
        <QueryClientProvider client={queryClient}>
          <Projects />
        </QueryClientProvider>
      </div>

      <hr className="divider" />

      <Footer />

    </div>
  );
};

export default Home;
