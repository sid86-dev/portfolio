import React, { useContext, useEffect } from "react";
import { Context } from "../../context/store";
import { fetchProject } from "../../lib/helpers";
import { AppStoreContext, Project } from "../../types";
import IsAvailable from "./IsAvailable";
import { Loader } from "./Loader";

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
  },[state.projects?.length, setState]);

  return (
    <div className="container py-2">
      <div className="row justify-content-center">
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
