import React from 'react'
import Brightness5Icon from '@mui/icons-material/Brightness5';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid px-5">
    <a className="navbar-brand" href="#">Sid86</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
        <li className="nav-item mx-lg-3">
          <a className="nav-link active" aria-current="page" href="#">
         <h6><WorkIcon className="navicon"/> Projects</h6></a>
        </li>
        <li className="nav-item mx-lg-3">
          <a className="nav-link" href="#"><h6><GitHubIcon/> Github</h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className="d-flex" >
        <button className="btn btn-dark mx-lg-3" type="submit"><Brightness5Icon /></button>
        <button className="btn btn-dark mx-2" type="submit"><TerminalIcon /></button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar