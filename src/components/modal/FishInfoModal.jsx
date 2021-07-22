import React from "react";
import Modal from "./Modal";

import useFreshwaterFishData from "./../../hooks/useFreshwaterFishData";

import "./fishInfoModal.scss";

export default function FishInfoModal({ name, isVisible, onClose }) {
  const { freshwaterFishData } = useFreshwaterFishData();
  console.log(freshwaterFishData);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="info-content">
        <h1>{name}</h1>

        {freshwaterFishData[name].generalInfo
          ? freshwaterFishData[name].generalInfo.map((paragraph, index) => (
              <p key={`${name}-fish-info-${index}`}>{paragraph}</p>
            ))
          : null}
      </div>
    </Modal>
  );
}
