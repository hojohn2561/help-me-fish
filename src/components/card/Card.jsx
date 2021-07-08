import React from "react";

import "./card.scss";

export default function Card({ height, width }) {
  return (
    <div
      className="card-container"
      style={{ height: height, width: width }}
    ></div>
  );
}
