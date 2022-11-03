import Image from "next/image";
import React, { FC } from "react";
import { tagColors } from "../../lib/helpers";
import { Project } from "../../types";

interface IProps {
  project: Project;
}

export const Main: FC<IProps> = ({ project }) => {
  return (
    <div className="container-table py-3">
      <div className="mb-5">
        <Image
          priority
          src={project?.image}
          height="450px"
          width={"800px"}
          layout="responsive"
          className="w-50 rounded shadow"
          alt={project.title}
        />
        <p className="text-muted fs-7 mt-3">Screenshort from the demo app</p>
      </div>

      <div>
        {/* Stacks */}
        <h2 className="py-4">🛠️ Stacks</h2>
        <div className="btn-group" role="group" aria-label="Large button group">
          {project.tags?.map((tag, index) => (
            <button
              type="button"
              key={index}
              className={`btn fs-6
                   ${tagColors.find((data) => data.tag === tag)?.class}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <p className="py-5">
        <span className="fs-5 text-white text-start">
          {project.title} is a web development project build by sid86-dev.{" "}
        </span>
        {project.longDescription}
      </p>

      {/* Topics */}
      <h2 className="py-3">📎 Topics</h2>
      <div className="container">
        <ul className="list-group text-start list-group-flush bg-none mx-4">
          {project.topics &&
            project?.topics.map((topic, index) => (
              <li key={index} className="bg-none my-1 fs-5">
                <span className="m-2">{topic}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
