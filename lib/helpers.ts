import { collection, getDocs } from "firebase/firestore";
import { ISkillCard, ITagColors, Project } from "../types";
import { db } from "./firebase-config";

export const cardVarient: ISkillCard[] = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Experienced in both functional and OOP: Python, JavaScript, Typescript, Solidity. MongoDB, GraphQL, SQL.",
  },
  {
    id: 2,
    title: "Frontenv Dev",
    description:
      "Over three years of frontend development experience in React, Next.js framework. Bootstrap, Tailwind CSS, Firebase, HTML5.",
  },

  {
    id: 3,
    title: "Mobile Dev",
    description:
      "Skilled in developing hybrid mobile apps and cross-platform solutions using React Native framework.",
  },
];

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

export const getdbData = new Promise<Project[]>(async (resolve) => {
  const projectCollectionRef = collection(db, "projects");
  const dbData = await getDocs(projectCollectionRef);
  const data = dbData.docs.map((doc) => ({
    ...(doc.data() as Project),
    id: doc.id,
  }));
  if (data) resolve(data);
});
