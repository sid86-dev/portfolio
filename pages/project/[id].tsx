import { doc, getDoc } from "@firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../components/Wrapper";
import { db } from "../../lib/firebase-config";
import { getdbData } from "../../lib/helpers";
import { Project } from "../../types";

type IProps = {
  project: Project;
  id: string | undefined;
};

const ProjectView = ({ project, id }: IProps) => {
  return (
    <Wrapper>
      <Head>
        <title>Sid86 | {project?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      {/* <Script
        src="https://kit.fontawesome.com/ca4b3c0f33.js"
        crossOrigin="anonymous"
      ></Script> */}
      <Navbar />
      <div className="container-fluid py-5">
        <div className="container text-center">
          <div className="col-12">
            <h1 className="fs-1">{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </div>
        <hr className="divider my-5" />
        <div className="container-table py-3">
          <div className="mb-5 shadow">
            <Image
              src={project?.image}
              height="450px"
              width={"800px"}
              layout="responsive"
              className="w-50 rounded"
              alt={project.title}
            />
          </div>
          <p>{project.description}</p>

          <h2 className="mt-5 mb-3">Stack</h2>
          <div className="container">
            <ul className="list-group text-start list-group-flush bg-none">
              {project.tags &&
                project?.tags.map((tag, index) => (
                  <li key={index} className="bg-none fs-6">
                    <span className="">
                      <span className="mx-2">{tag}</span>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="divider mt-5" />
      <Footer />
    </Wrapper>
  );
};

export default ProjectView;

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const id = params?.id as string;
  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data() as Project;
  return { props: { project: data, id: id } };
};

type params = {
  id: string;
};

type paths = {
  params: params;
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const dbData = await getdbData;
  const ids: paths[] = [];
  dbData.map((project) => ids.push({ params: { id: project.id } }));
  console.log(ids);
  return {
    fallback: false,
    paths: ids,
  };
};
