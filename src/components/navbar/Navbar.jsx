import React from "react";

import "./navbar.scss";
import NavbarOption from "./NavbarOption";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <span className="logo-text navbar-text">Help Me Fish</span>
      </div>
      <span className="vertical-bar" />
      <div className="navbar-options">
        <NavbarOption
          text="Freshwater"
          onClick={() => console.log("load Freshwater content")}
        />
        <NavbarOption
          text="Saltwater"
          onClick={() => console.log("load Saltwater content")}
        />
      </div>
    </div>
  );
}
