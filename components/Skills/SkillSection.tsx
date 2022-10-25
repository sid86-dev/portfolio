import React from "react";
import { SkillCard } from "./SkillCard";
import { ISkillCard } from "../../types";
import { motion } from "framer-motion";
import Sparkles from "react-sparkle";

export default function App() {
  const cardVarient: ISkillCard[] = [
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

  return (
    <>
      {/* display cards */}

      <div className="card-group my-5 py-4">
        {cardVarient.map((card, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`card border-5 ${
              index != 1 ? "border-success" : "border-danger"
            } mx-md-2 mx-xl-3 rounded`}
          >
            <div>
              <SkillCard display={card} />
            </div>{" "}
          </motion.div>
        ))}
      </div>
    </>
  );
}
