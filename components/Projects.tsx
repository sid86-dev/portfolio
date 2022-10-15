import React, { useEffect, useState } from "react";
import { useProjectsStore } from "../store";
import IsAvailable from "./Project/IsAvailable";
import { Loader } from "./Project/Loader";

export const Projects = () => {
  const projectsData = useProjectsStore((state) => state.data);
  const pending = useProjectsStore((state) => state.pending);

  useEffect(() => {
    useProjectsStore.getState().loadProjectData();
  }, []);

  return (
    <div className="container py-2">
      <div className="row">
        {!pending ? (
          <IsAvailable data={projectsData} />
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
