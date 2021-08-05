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

  // If form still has null values, don't display the modal yet
  if (
    !formResponses.waterTemperature ||
    !formResponses.cloudCondition ||
    !formResponses.waterClarity
  )
    return null;

  // If execution reaches this point, form has been filled to completion
  // Destructuring formResponses object so don't have to keep using dot notation
  const {
    targetSpecies: selectedTargetSpecies,
    cloudCondition: selectedCloudCondition,
    waterTemperature: selectedWaterTemperature,
    waterClarity: selectedWaterClarity,
  } = formResponses;

  // If fishData exists, target species was selected
  if (fishData) {
    const help = getFreshwaterHelp(
      selectedTargetSpecies,
      selectedCloudCondition,
      selectedWaterTemperature,
      selectedWaterClarity,
      fishData.idealCloudConditions,
      fishData.idealTemperatureRange
    );

    console.log(help);
    // If user had a target species, display info about that particular species
    if (selectedTargetSpecies)
      return (
        <Modal isVisible={isVisible} onClose={onClose} height="65%" width="65%">
          <div className="help-content">
            <h1>{selectedTargetSpecies}</h1>
            <div className="images-container">
              {fishData.fishImageUrls.map((imageUrl) => (
                <div className="image-container" key={imageUrl}>
                  <img
                    alt={selectedTargetSpecies}
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
                      alt={key}
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
  }

  // fishData prop DOES NOT exist, meaning a target species WAS NOT selected
  else {
    const help = getFreshwaterHelp(
      selectedTargetSpecies,
      selectedCloudCondition,
      selectedWaterTemperature,
      selectedWaterClarity
    );

    return (
      <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
        <div className="help-content">
          <div>{help.intro}</div>
          <div>{selectedWaterTemperature}</div>
          <div>{selectedCloudCondition}</div>
          <div>{selectedWaterClarity}</div>
        </div>
      </Modal>
    );
  }
}
