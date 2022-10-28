import { doc, getDoc } from "@firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../components/Wrapper";
import { db } from "../../lib/firebase-config";
import { getdbData } from "../../lib/helpers";
import { Project } from "../../types";

type IProps = {
  project: Project | undefined;
  id: string | undefined;
};

const ProjectView = ({ project, id }: IProps) => {
  return (
    <Wrapper>
      <Navbar />
      <div className="container text-center py-5">
        <h1 className="fs-1">{project?.title}</h1>
        <p className="fs-6">{project?.description}</p>
        <hr className="divider my-5" />
        {/* <img src={project?.image} class="img-fluid w-75 rounded" alt="..." /> */}
      </div>
    </Wrapper>
  );
};

export default ProjectView;

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const id = params?.id as string;
  try {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as Project;
      return { props: { project: data, id: id } };
    } else {
      return { props: { project: undefined, id: undefined } };
    }
  } catch (error) {
    return { props: { project: undefined, id: undefined } };
  }
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
