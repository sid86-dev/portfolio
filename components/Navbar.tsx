import React from "react";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import WorkIcon from "@mui/icons-material/Work";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import useStore from "../store";

function Navbar() {

  const { setTheme, isDark } = useStore();

  const style = {
    navbar: `navbar navbar-expand-lg py-3 ${isDark ? "bg-mid-dark" : "bg-light"}`,
    navLinks: `nav-link active ${!isDark ? "text-mid-dark" : "text-light"}`,
  };

  console.log(isDark);

  return (
    <nav className={style.navbar}>
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          Sid86
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-lg-3">
              <a className={style.navLinks} aria-current="page" href="#">
                <h6 className="fs-6">
                  <WorkIcon className="navicon" /> Projects
                </h6>
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={style.navLinks} href="#">
                <h6 className="fs-6">
                  <GitHubIcon /> Github
                </h6>
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={style.navLinks} href="#">
                <h6 className="fs-6">
                  <MeetingRoomIcon /> Meet
                </h6>
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-dark mx-lg-3"
              type="submit"
              onClick={() => setTheme(isDark)}
            >
              <Brightness5Icon />
            </button>
            <button className="btn btn-dark mx-2" type="submit">
              <TerminalIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
