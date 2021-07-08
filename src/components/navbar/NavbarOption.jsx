import React from "react";
import { Link } from "react-router-dom"; // Using react-router-dom to link to other content in the SPA

import "./navbarOption.scss";

export default function NavbarOption({ text, to }) {
  return (
    <Link className="navbar-option navbar-text" to={to}>
      <span className="option-text">{text}</span>
      <span className="underline" />
    </Link>
  );
}
