import axios from "axios";
import { Project } from "../types";

const fetchProject = async () => {
  const res = await axios.get<Project[]>("/api/getProjects");
  return res.data;
};

export { fetchProject };
