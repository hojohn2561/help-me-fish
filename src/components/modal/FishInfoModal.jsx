import React from "react";
import Modal from "./Modal";

import "./fishInfoModal.scss";

export default function FishInfoModal({ name, fishData, isVisible, onClose }) {
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
        <div className="image-container">
          <img
            alt={name}
            className="fish-card-image"
            src={fishData.fishImageUrls[0]}
          />
        </div>
        <div className="info">
          <p className="info-paragraph">{fishData.intro}</p>
          <p className="info-paragraph">{fishData.fishingTips}</p>
          <p className="info-paragraph">{fishData.spawnBehavior}</p>
          <p className="info-paragraph">{fishData.identification}</p>
        </div>
        {fishData.sources ? (
          <div className="sources">
            <h2>Sources</h2>

            <ul>
              {fishData.sources.map((source, index) => (
                <li key={`${name}-source-${index}`}>
                  <a href={source}>{source}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
