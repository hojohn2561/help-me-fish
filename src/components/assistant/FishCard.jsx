import React, { useState } from "react";
import Modal from "../modal/Modal";

import "./fishCard.scss";
import FishInfoModal from "./../modal/FishInfoModal";

export default function FishCard({ name, imageUrl }) {
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
        name={name}
        isVisible={isFishInfoModalOpen}
        onClose={() => setIsFishInfoModalOpen(false)}
      />
    </>
  );
}
