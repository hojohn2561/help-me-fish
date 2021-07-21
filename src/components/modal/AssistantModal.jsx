import React from "react";
import Modal from "./Modal";

import "./assistantModal.scss";

export default function AssistantModal({ isVisible, onClose, formResponses }) {
  console.log(formResponses);

  // If user had a target species, display info about that particular species
  if (formResponses.targetSpecies)
    return (
      <Modal isVisible={isVisible} onClose={onClose}>
        <div className="help-content">
          <div>{formResponses.targetSpecies}</div>
          <div>{formResponses.waterTemperature}</div>
          <div>{formResponses.cloudCondition}</div>
          <div>{formResponses.waterClarity}</div>
        </div>
      </Modal>
    );

  // Otherwise, no target species, display general info
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="help-content">
        <div>{formResponses.waterTemperature}</div>
        <div>{formResponses.cloudCondition}</div>
        <div>{formResponses.waterClarity}</div>
      </div>
    </Modal>
  );
}
