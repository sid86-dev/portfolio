import React, { ReactNode, useContext } from "react";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AppStoreContext, Project } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Context } from "../../context/store";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { tagColors } from "../../lib/helpers";

interface IProps {
  data: Project[];
}

const ProjectCard: Function = ({ data }: IProps): ReactNode[] => {
  const [state] = useContext<AppStoreContext>(Context);

  const style = {
    icons: `${state.isDark ? "bg-dark text-white" : "bg-gray text-dark"}`,
  };

  return data.map((item, index) => (
    <div
      className={`col-md-5 my-4 px-lg-4 pt-lg-4 ${
        state.isDark ? "bg-dark-xs" : "bg-light"
      } mx-3 rounded-3`}
      key={index}
    >
      <div className="card border-0 rounded-0 rounded-top">
        {/* card navbar */}
        <div className="card-header d-flex align-items-center border-0">
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <input
            type="text"
            className="border-0 fs-7 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center"
            value={item.link.replace("https://", "").slice(0, -1)}
            disabled
          />
          <ArrowForwardIcon className="text-dark" />
        </div>
      </div>
      <div className="card-body w-100">
        {/* main image */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href={`/view/${item.id}`}>
            <a className="h-100 w-100">
              <Image
                src={item.image}
                className="card-img-top rounded-0 rounded-bottom shadow"
                alt="..."
                height="500px"
                width="900px"
                priority
              />
            </a>
          </Link>
        </motion.div>

        {/* body */}
        <div className="row align-items-center mt-3">
          {/* Project Title */}
          <div className="col-md-6">
            <h5 className="card-title col-12">{item.title}</h5>
          </div>

          <div className="col-md-6">
            <div className="row">
              {/* source link */}
              <a
                href={item.link}
                className="col-6 text-md-end"
                target="_blank"
                rel="noreferrer"
              >
                <OpenInNewSharpIcon
                  fontSize="small"
                  className={`${style.icons}`}
                />
              </a>

              {/* github link */}
              <a
                href={item.github}
                className="col-6 text-end"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <GitHubIcon className={`${style.icons}`} />
              </a>
            </div>
          </div>

          {/* Project description */}
          <div className="col-12">
            <p className="card-text my-4">{item.description}</p>
          </div>
        </div>
      </div>
      {/* Project tags */}
      <div className="col-12 mb-3 card-footer">
        <div className="d-flex justify-content-start">
          {item.tags?.map((tag, index) => (
            <button
              key={index}
              className={`btn btn-sm my-2 px-1 py-0 fs-7 text-dark border-dark border-0 rounded-3
                  ${index % 2 != 0 && "mx-2"} ${
                tagColors.find((data) => data.tag === tag)?.class
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default ProjectCard;
