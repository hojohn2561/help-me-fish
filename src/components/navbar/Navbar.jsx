import React from "react";
import { Link } from "react-router-dom"; // Using react-router-dom to link to other content in the SPA

import NavbarOption from "./NavbarOption";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <span className="logo-text navbar-text">Help Me Fish</span>
      </Link>
      <span className="vertical-bar" />
      <div className="navbar-options">
        <NavbarOption text="Freshwater" to="/freshwater" />
        <NavbarOption text="Saltwater" to="/saltwater" />
      </div>
    </div>
  );
}
