import React from "react";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <>
      <ul>
        <Link to="/"> Home </Link>
        <Link to="about"> About </Link>
        <Link to="skill"> Skill </Link>
        <Link to="service"> Service </Link>
        <Link to="contact"> Contact </Link>
      </ul>
    </>
  );
}

export default Menubar;
