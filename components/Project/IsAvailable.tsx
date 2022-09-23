import React, { ReactNode } from "react";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "../../types";
import { ProjectCard } from "../ProjectCard";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStore from "../../store";

interface IProps {
  data: Project[];
}

const IsAvailable: Function = ({ data }: IProps): ReactNode[] => {
  const { isDark } = useStore();

  const style = {
    icons: `mx-5 ${isDark ? "bg-dark text-white" : "bg-gray text-dark"}`,
  };

  return data.map((item, index) => (
    <ProjectCard key={index}>
      <div className="card border-0 mt-3 rounded-0 rounded-top">
        <div className="card-header d-flex align-items-center border-0">
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <input
            type="text"
            className="border-0 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center"
            value={item.link}
            disabled
          />
          <ArrowForwardIcon className="text-dark" />
        </div>
      </div>
      <div className="card-body">
        <Link href={`/view/${item._id}`}>
          <img
            src={item.image}
            className="card-img-top rounded-0 rounded-bottom shadow mb-3"
            alt="..."
            height="100%"
          />
        </Link>

        <div className="d-flex align-items-center">
          <h5 className="card-title">{item.title}</h5>
          <a
            href={item.link}
            target="_blank"
            className="text-dark"
            rel="noreferrer"
          >
            <OpenInNewSharpIcon
              fontSize="inherit"
              className={`${style.icons} mx-2`}
            />
          </a>
          <a
            href={item.github}
            target="_blank"
            className="text-dark"
            rel="noreferrer"
          >
            {" "}
            <GitHubIcon className={`${style.icons} mx-5`} />
          </a>
        </div>

        <p className="card-text my-3 text-muted">{item.description}</p>
      </div>
    </ProjectCard>
  ));
};

export default IsAvailable;
