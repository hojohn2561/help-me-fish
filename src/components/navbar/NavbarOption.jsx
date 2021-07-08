import React from "react";

import "./navbarOption.scss";

export default function NavbarOption({ text, onClick }) {
  return (
    <div className="navbar-option navbar-text">
      <span className="option-text" onClick={onClick}>
        {text}
      </span>
      <span className="underline" />
    </div>
  );
}
