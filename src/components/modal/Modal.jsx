import React from "react";

import "./modal.scss";

export default function Modal({ children, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-container">
      <div className="close-button-container">
        <span id="close-button" onClick={onClose}>
          X
        </span>
      </div>
      <div className="content-container">{children}</div>
    </div>
  );
}
