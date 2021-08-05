import React from "react";
import Modal from "./Modal";

import { getFreshwaterHelp } from "../utility/freshwaterHelp";

import "./assistantModal.scss";

export default function AssistantModal({
  isVisible,
  onClose,
  formResponses,
  fishData,
}) {
  console.log(formResponses);

  if (
    !formResponses.waterTemperature ||
    !formResponses.cloudCondition ||
    !formResponses.waterClarity
  )
    return null;

  // If fishData exists, target species was selected
  if (fishData) {
    const help = getFreshwaterHelp(
      formResponses.targetSpecies,
      fishData.idealCloudConditions,
      fishData.idealTemperatureRange,
      formResponses.cloudCondition,
      formResponses.waterTemperature,
      formResponses.waterClarity
    );

    console.log(help);
    // If user had a target species, display info about that particular species
    if (formResponses.targetSpecies)
      return (
        <Modal isVisible={isVisible} onClose={onClose} height="65%" width="65%">
          <div className="help-content">
            <h1>{formResponses.targetSpecies}</h1>
            <div className="images-container">
              {fishData.fishImageUrls.map((imageUrl) => (
                <div className="image-container" key={imageUrl}>
                  <img
                    alt={formResponses.targetSpecies}
                    className="fish-card-image"
                    src={imageUrl}
                  />
                </div>
              ))}
            </div>
            <div className="help-text">
              <h2>Your Fishing Conditions:</h2>
              <p>{help.intro}</p>
              <br />
              <br />
              <h2>Bait/Lure Options:</h2>
              <p>{help.lures.intro}</p>
              <br />
              {Object.keys(help.lures.types).map((key) => (
                <div key={key}>
                  <span className="lure-header">
                    <h3 className="lure-header-text">{key}</h3>
                    <img
                      className="status-image"
                      src={help.lures.types[key].image}
                    />
                  </span>
                  <p>{help.lures.types[key].message}</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </Modal>
      );

    // Otherwise, no target species, display general info
    return (
      <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
        <div className="help-content">
          <div>{formResponses.waterTemperature}</div>
          <div>{formResponses.cloudCondition}</div>
          <div>{formResponses.waterClarity}</div>
        </div>
      </Modal>
    );
  }

  // fishData prop DOES NOT exist, target species WAS NOT selected
  else {
    return (
      <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
        <div className="help-content">
          <div>{formResponses.waterTemperature}</div>
          <div>{formResponses.cloudCondition}</div>
          <div>{formResponses.waterClarity}</div>
        </div>
      </Modal>
    );
  }
}
