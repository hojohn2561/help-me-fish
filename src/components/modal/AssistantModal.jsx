import React from "react";
import Modal from "./Modal";

import constants from "../../utility/constants.json";
import useFreshwaterFishData from "../../hooks/useFreshwaterFishData";
import useSaltwaterFishData from "./../../hooks/useSaltwaterFishData";
import {
  getFreshwaterSpecificHelp,
  getFreshwaterGeneralHelp,
} from "../../utility/freshwaterHelp";

import "./assistantModal.scss";

export default function AssistantModal({
  // Data for all the freshwater or saltwater fish
  fishesData,
  formResponses,
  targetFishData,
  isVisible,
  onClose,
}) {
  const { freshwaterFishData } = useFreshwaterFishData();
  const { saltwaterFishData } = useSaltwaterFishData();

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
    waterType: selectedWaterType,
  } = formResponses;

  // If fishData exists, target species was selected
  if (targetFishData) {
    const help = getFreshwaterSpecificHelp(
      selectedTargetSpecies,
      selectedCloudCondition,
      selectedWaterTemperature,
      selectedWaterClarity,
      targetFishData.idealCloudConditions,
      targetFishData.idealTemperatureRange
    );

    // If user had a target species, display info about that particular species
    if (selectedTargetSpecies)
      return (
        <Modal isVisible={isVisible} onClose={onClose} height="65%" width="55%">
          <div className="help-content">
            <h1>{selectedTargetSpecies}</h1>
            <div className="images-container">
              {targetFishData.fishImageUrls.map((imageUrl) => (
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
              <p>{help[0].intro}</p>
              <br />
              <br />
              <h2>Bait/Lure Options:</h2>
              <p>{help[0].lures.intro}</p>
              <br />
              {Object.keys(help[0].lures.types).map((key) => (
                <div key={key}>
                  <span className="lure-header">
                    <h3 className="lure-header-text">{key}</h3>
                    <img
                      alt={key}
                      className="status-image"
                      src={help[0].lures.types[key].image}
                    />
                  </span>
                  <p>{help[0].lures.types[key].message}</p>
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
    let help;

    // Get freshwater general fish help info
    if (selectedWaterType === constants.waterTypes.freshwater) {
      console.log("call getFreshwaterGeneralHelp");

      help = getFreshwaterGeneralHelp(
        selectedCloudCondition,
        selectedWaterTemperature,
        selectedWaterClarity,
        fishesData
      );
    }
    // Get saltwater general fish help info");
    else {
      help = getFreshwaterGeneralHelp(
        selectedCloudCondition,
        selectedWaterTemperature,
        selectedWaterClarity,
        fishesData
      );
    }

    return (
      <Modal isVisible={isVisible} onClose={onClose} height="75%" width="75%">
        <div className="help-content">
          <div className="suggestion-header-container">
            <h1 className="suggestion-header">We Suggest</h1>
          </div>
          {help.map((fishHelp) => (
            <div
              key={`${fishHelp.speciesName}-help`}
              className="fish-help-section"
            >
              <h1>{fishHelp.speciesName}</h1>
              <div className="images-container">
                {fishesData[fishHelp.speciesName].fishImageUrls.map(
                  (imageUrl) => (
                    <div className="image-container" key={imageUrl}>
                      <img
                        alt={fishHelp.speciesName}
                        className="fish-card-image"
                        src={imageUrl}
                      />
                    </div>
                  )
                )}
              </div>
              <div>{fishHelp.intro}</div>
            </div>
          ))}
        </div>
      </Modal>
    );
  }
}
