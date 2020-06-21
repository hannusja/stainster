import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href= {process.env.PUBLIC_URL + "/#/"}>
        Main
      </a>
      <a className="navbar-brand" href={process.env.PUBLIC_URL +"/#/projects"}>
        About
      </a>
      <p className="nav navbar-nav" style={{paddingLeft: "35%"}}>STAINSTER </p>
    </nav>
  );
}

export default Nav;