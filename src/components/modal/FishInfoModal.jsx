import React from "react";
import Modal from "./Modal";

import "./fishInfoModal.scss";

export default function FishInfoModal({ name, fishData, isVisible, onClose }) {
  console.log(fishData);

  // Fish data doesn't exist, just return blank modal
  if (!fishData)
    return (
      <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
        <div className="info-content">
          <h1>{name}</h1>
        </div>
      </Modal>
    );

  // Fish data does exist, if generalInfo does too, display it on the modal, otherwise, return null
  return (
    <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
      <div className="info-content">
        <h1>{name}</h1>

        {fishData.generalInfo
          ? fishData.generalInfo.map((paragraph, index) => (
              <p key={`${name}-fish-info-${index}`}>{paragraph}</p>
            ))
          : null}
      </div>
    </Modal>
  );
}
