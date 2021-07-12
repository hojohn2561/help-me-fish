import React from "react";

import "./fishCard.scss";

export default function FishCard({ name, imageUrl }) {
  return (
    <div className="fish-card" key={name}>
      <div className="fish-card-content">
        <div className="fish-card-image-container">
          <img alt={name} className="fish-card-image" src={imageUrl} />
        </div>
        <div className="fish-card-body">{name}</div>
      </div>
    </div>
  );
}
