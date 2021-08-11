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

  const createIntroSection = () =>
    fishData.intro ? (
      <>
        <h2>Introduction</h2>
        <p className="info-paragraph">{fishData.intro}</p>
      </>
    ) : null;

  const createFishingTipsSection = () =>
    fishData.fishingTips ? (
      <>
        <h2>Fishing Tips</h2>
        <p className="info-paragraph">{fishData.fishingTips}</p>
      </>
    ) : null;

  const createSpawnBehaviorSection = () =>
    fishData.spawnBehavior ? (
      <>
        <h2>Spawning</h2>
        <p className="info-paragraph">{fishData.spawnBehavior}</p>
      </>
    ) : null;

  const createIdentificationSection = () =>
    fishData.identification ? (
      <>
        <h2>Identification</h2>
        <p className="info-paragraph">{fishData.identification}</p>
      </>
    ) : null;

  // Fish data does exist, if generalInfo does too, display it on the modal, otherwise, return null
  return (
    <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
      <div className="info-content">
        <h1>{name}</h1>
        <div className="image-container">
          <img
            alt={name}
            className="fish-modal-image"
            src={fishData.fishImageUrls[0]}
          />
        </div>
        <div className="info">
          {createIntroSection()}
          {createFishingTipsSection()}
          {createSpawnBehaviorSection()}
          {createIdentificationSection()}
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
