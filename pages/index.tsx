import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { Projects } from "../components/Project/ProjectSection";
import { Footer } from "../components/Footer";
import SkillSection from "../components/Skills/SkillSection";
import { Wrapper } from "../components/Wrapper";

const Home: NextPage = () => {
  return (
    <Wrapper>
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

      {/* TechStack section */}
      <div className="container justify-content-center py-3">
        <h2 className="text-center">Tech Stack</h2>
        <SkillSection />
      </div>

      <hr className="divider" />

      {/* Project showcase section */}
      <div className="container justify-content-center py-3">
        <h2 className="text-center">Projects</h2>
        <Projects />
      </div>

      <hr className="divider mt-5" />

      <Footer />
    </Wrapper>
  );
};

export default Home;
