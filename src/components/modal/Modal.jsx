import React from "react";

import "./modal.scss";

export default function Modal({
  children,
  isVisible,
  onClose,
  height = "500px",
  width = "500px",
}) {
  if (!isVisible) return null;

  return (
    <div className="modal-container" style={{ height: height, width: width }}>
      <div className="close-button-container">
        <span id="close-button" onClick={onClose}>
          X
        </span>
      </div>
      <div className="content-container">{children}</div>
    </div>
  );
}
