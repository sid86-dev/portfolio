import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { ProjectSection } from "../components/Project/ProjectSection";
import { Footer } from "../components/Footer";
import SkillSection from "../components/Skills/SkillSection";
import { Wrapper } from "../components/Wrapper";
import { Project } from "../types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase-config";

interface IProps {
  projects: Project[] | null;
}

const Home: NextPage<IProps> = ({ projects }) => {
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
      <SkillSection />

      <hr className="divider" />

      {/* Project showcase section */}
      <ProjectSection projects={projects} />

      <hr className="divider mt-5" />

      <Footer />
    </Wrapper>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projectCollectionRef = collection(db, "projects");
  const data = await getDocs(projectCollectionRef);
  const projects = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  return {
    props: {
      projects,
    },
  };
};
