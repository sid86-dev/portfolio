import React, { ReactNode, useContext } from "react";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AppStoreContext, Project } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Context } from "../../context/store";
import Link from "next/link";
import { motion } from "framer-motion";

interface IProps {
  data: Project[];
}

const IsAvailable: Function = ({ data }: IProps): ReactNode[] => {
  const [state] = useContext<AppStoreContext>(Context);

  const style = {
    icons: `mx-5 ${state.isDark ? "bg-dark text-white" : "bg-gray text-dark"}`,
  };

  return data.map((item, index) => (
    <div className="col-md-6 col-xl-5 my-3 px-lg-4" key={index}>
      <div className="card border-0 mt-3 rounded-0 rounded-top">
        <div className="card-header d-flex align-items-center border-0">
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <input
            type="text"
            className="border-0 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center"
            value={item.link.replace("https://", "")}
            disabled
          />
          <ArrowForwardIcon className="text-dark" />
        </div>
      </div>
      <div className="card-body w-100">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href={`/view/${item._id}`}>
            <a>
              <img
                src={item.image}
                className="card-img-top rounded-0 rounded-bottom shadow mb-3"
                alt="..."
                height="100%"
              />
            </a>
          </Link>
        </motion.div>

        <div className="d-flex align-items-center">
          <h5 className="card-title">{item.title}</h5>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-dark"
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

        <p className="card-text my-3">{item.description}</p>
      </div>
    </div>
  ));
};

export default IsAvailable;
