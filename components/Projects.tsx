import React, { useContext, useEffect } from "react";
import { Context } from "../context/store";
import { fetchProject } from "../lib/requestFunc";
import { AppStoreContext, Project } from "../types";
import IsAvailable from "./Project/IsAvailable";
import { Loader } from "./Project/Loader";

interface ApiProps {
  projects: Project[];
}

export const Projects = () => {
  const [state, setState] = useContext<AppStoreContext>(Context);

  useEffect(() => {
    const setProjects = async () => {
      var data = await fetchProject();
      console.log(data);
      // @ts-ignore
      setState((prev) => ({
        ...prev,
        ["projects"]: data,
      }));
    };
    if (!state.projects?.length) {
      setProjects();
    }
  },[]);

  return (
    <div className="container py-2">
      <div className="row">
        {state.projects ? (
          <IsAvailable data={state.projects} />
        ) : (
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        )}
      </div>
    </div>
  );
};
