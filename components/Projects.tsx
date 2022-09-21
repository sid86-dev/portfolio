import { QueryKey, useQuery } from "@tanstack/react-query";
import React from "react";
import { getProjects } from "../lib/requestFunc";
import { Project } from "../types";
import IsAvailable from "./Project/IsAvailable";

export const Projects = () => {
  // Queries
  const { data, status } = useQuery<Project[], Error>(
    ["projects"] as QueryKey,
    getProjects
  );

  console.log(data, status);

  const projectsData = data ?? [];

  return (
    <div className="container py-2">
      <div className="row">
        {status == "success" && <IsAvailable data={projectsData} />}
      </div>
    </div>
  );
};
