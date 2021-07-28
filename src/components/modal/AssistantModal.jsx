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
  // console.log(fishData);

  if (
    !formResponses.waterTemperature ||
    !formResponses.cloudCondition ||
    !formResponses.waterClarity
  )
    return null;

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
          <div className="image-container">
            <img
              alt={formResponses.targetSpecies}
              className="fish-card-image"
              src={fishData.fishImageUrl}
            />
          </div>
          <div className="help-text">
            <p>{help.intro}</p>
            <br />
            <p>{help.lures.intro}</p>
            <br />
            {Object.keys(help.lures.types).map((key) => (
              <div key={key}>
                <h3>{key}</h3>
                <p>{help.lures.types[key]}</p>
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
