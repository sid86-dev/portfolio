import axios from "axios";
import { ITagColors, Project } from "../types";

const fetchProject = async () => {
  const res = await axios.get<Project[]>("/api/getProjects");
  return res.data;
};

export const tagColors: ITagColors[] = [
  { tag: "react", class: "bg-light-200" },
  { tag: "nextjs", class: "bg-black" },
  { tag: "nodejs", class: "bg-green-500" },
  { tag: "python", class: "bg-yellow-500" },
  { tag: "javascript", class: "bg-yellow" },
  { tag: "typescript", class: "bg-blue-500" },
  { tag: "solidity", class: "bg-gray-400" },
  { tag: "web3", class: "bg-gray-500" },
  { tag: "ethereum", class: "bg-gray-600" },
  { tag: "tailwind", class: "bg-blue-400" },
  { tag: "css", class: "bg-blue-200" },
  { tag: "html", class: "bg-red-500" },
  { tag: "mongodb", class: "bg-green-300" },
  { tag: "postgresql", class: "bg-blue-700" },
  { tag: "mysql", class: "bg-blue-800" },
  { tag: "firebase", class: "bg-yellow" },
  { tag: "aws", class: "bg-yellow-300" },
  { tag: "docker", class: "bg-blue-900" },
  { tag: "linux", class: "bg-gray-700" },
  { tag: "bootstrap", class: "bg-purple-500" },
  { tag: "material-ui", class: "bg-blue-100" },
];

export { fetchProject };
