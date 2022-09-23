import { QueryKey, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getProjects } from "../lib/requestFunc";
import { Project } from "../types";
import IsAvailable from "./Project/IsAvailable";
import { Loader } from "./Project/Loader";

export const Projects = () => {
  const [allowRefetch, setAllowRefetch] = useState(true);

  // Queries
  const { data, status } = useQuery<Project[], Error>(
    ["projects"] as QueryKey,
    getProjects,
    { enabled: allowRefetch }
  );

  useEffect(() => {
    if (data) setAllowRefetch(false);
  }, [data]);

  const projectsData = data ?? [];

  return (
    <div className="container py-2">
      <div className="row">
        {status == "success" ? (
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
