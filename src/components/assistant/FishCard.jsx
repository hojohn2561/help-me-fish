import React, { useState } from "react";

import FishInfoModal from "./../modal/FishInfoModal";

import "./fishCard.scss";

export default function FishCard({ imageUrl, name, fishData }) {
  const [isFishInfoModalOpen, setIsFishInfoModalOpen] = useState(false);

  return (
    <>
      <div className="fish-card" key={name}>
        <div
          className="fish-card-content"
          onClick={() => setIsFishInfoModalOpen(true)}
        >
          <div className="fish-card-image-container">
            <img alt={name} className="fish-card-image" src={imageUrl} />
          </div>
          <div className="fish-card-body">{name}</div>
        </div>
      </div>
      <FishInfoModal
        fishData={fishData}
        name={name}
        isVisible={isFishInfoModalOpen}
        onClose={() => setIsFishInfoModalOpen(false)}
      />
    </>
  );
}
