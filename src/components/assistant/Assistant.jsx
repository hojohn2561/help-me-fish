import React, { useState } from "react";

import AssistantModal from "../modal/AssistantModal";

import "./assistant.scss";
import constants from "../../utility/constants.json";

const temperatureValues = [
  "< 50",
  ...Array.from(Array(85).keys()).splice(51, 85), // Generate array of numbers from 51 to 99
  "> 85",
];

const cloudConditions = [
  constants.cloudConditions.mostlySunny,
  constants.cloudConditions.partlyCloudy,
  constants.cloudConditions.mostlyCloudy,
  constants.cloudConditions.lightShowers,
  constants.cloudConditions.heavyRain,
  constants.cloudConditions.thunderstorms,
  constants.cloudConditions.snow,
];

const waterClarities = [
  constants.waterClarities.clear,
  constants.waterClarities.partlyStained,
  constants.waterClarities.stained,
];

export default function Assistant({ fishes }) {
  // State variable for form values
  const [formResponses, setFormResponses] = useState({
    hasTargetSpecies: null,
    targetSpecies: null,
    waterTemperature: null,
    cloudCondition: null,
    waterClarity: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const assistantForm = {
    haveTargetSpecies: {
      prompt: "Do you have a target species in mind?",
      responseContainer: (
        <div className="response-container radio-group">
          {/* Same name, so only one radio button can be checked at a time */}
          <label>
            <input
              name="hasTargetSpecies"
              type="radio"
              value={true}
              onChange={(event) => updateValues(event.target.name, true)}
            />
            Yes
          </label>
          <label>
            <input
              name="hasTargetSpecies"
              type="radio"
              value={false}
              onChange={(event) => updateValues(event.target.name, false)}
            />
            No
          </label>
        </div>
      ),
    },
    targetSpecies: {
      prompt: "Select a species.",
      responseContainer: (
        <div className="response-container">
          <select
            defaultValue="Select Species"
            name="targetSpecies"
            onChange={(event) =>
              updateValues(event.target.name, event.target.value)
            }
          >
            <option disabled value="Select Species">
              Select Species
            </option>
            {Object.keys(fishes).map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>
      ),
    },
    setWaterTemp: {
      prompt: "What is the water temperature (°F) on the day of your trip?",
      responseContainer: (
        <div className="response-container">
          <select
            defaultValue="Select Water Temperature (°F)"
            name="waterTemperature"
            onChange={(event) =>
              updateValues(event.target.name, event.target.value)
            }
          >
            <option disabled value="Select Water Temperature (°F)">
              Select Water Temperature (°F)
            </option>
            {temperatureValues.map((waterTemp) => (
              <option key={waterTemp} value={waterTemp}>
                {waterTemp}
              </option>
            ))}
          </select>
        </div>
      ),
    },
    setCloudConditions: {
      prompt: "What are the cloud conditions on the day of your trip?",
      responseContainer: (
        <div className="response-container">
          <select
            defaultValue="Select Cloud Condition"
            name="cloudCondition"
            onChange={(event) =>
              updateValues(event.target.name, event.target.value)
            }
          >
            <option disabled value="Select Cloud Condition">
              Select Cloud Condition
            </option>
            {cloudConditions.map((cloudCondition) => (
              <option key={cloudCondition} value={cloudCondition}>
                {cloudCondition}
              </option>
            ))}
          </select>
        </div>
      ),
    },
    setWaterClarity: {
      prompt: "What is the water clarity on the day of your trip?",
      responseContainer: (
        <div className="response-container">
          <select
            defaultValue="Select Water Clarity"
            name="waterClarity"
            onChange={(event) =>
              updateValues(event.target.name, event.target.value)
            }
          >
            <option disabled value="Select Water Clarity">
              Select Water Clarity
            </option>
            {waterClarities.map((waterClarity) => (
              <option key={waterClarity} value={waterClarity}>
                {waterClarity}
              </option>
            ))}
          </select>
        </div>
      ),
    },
  };

  const updateValues = (fieldName, fieldValue) => {
    // If user set hasTargetSpecies to No (false), reset targetSpecies too
    if (fieldName === "hasTargetSpecies" && !fieldValue)
      setFormResponses({
        ...formResponses,
        [fieldName]: fieldValue,
        targetSpecies: null,
      });
    // Otherwise, just update the form state normally
    else setFormResponses({ ...formResponses, [fieldName]: fieldValue });
  };

  const getHelp = (event) => {
    event.preventDefault(); // To prevent page from reloading on submission
    console.log(formResponses);

    // User had a target species in mind
    if (formResponses.hasTargetSpecies) {
      // If form contains no null values (in other words, all fields have a response)
      if (!Object.values(formResponses).includes(null)) {
        console.log(`Show tips for ${formResponses.targetSpecies}`);
        setIsModalOpen(true);
      }
      // Form had a null value
      else console.log("null values in form, can't provide help yet (1)");
    }

    // User did not have a target species in mind
    else {
      // If user filled out everything in form except target species
      if (
        formResponses.waterTemperature &&
        formResponses.cloudCondition &&
        formResponses.waterClarity
      ) {
        console.log(
          `Suggest what to species to target, what to use, and techniques`
        );
        setIsModalOpen(true);
      }
      // Form had a null value other than target species
      else console.log("null values in form, can't provide help yet (2)");
    }
  };

  return (
    <>
      <form onSubmit={(event) => getHelp(event)}>
        <div className="assistant-card">
          {Object.keys(assistantForm).map((key) =>
            // Only need user to select a species if they have a target species in mind.
            // If key === "targetSpecies"
            key === "targetSpecies" ? (
              // If hasTargetSpecies is true
              formResponses.hasTargetSpecies ? (
                // Make prompt to select a species visible
                <div key={key}>
                  <h2>{assistantForm[key].prompt}</h2>
                  {assistantForm[key].responseContainer}
                </div>
              ) : // Otherwise, make prompt to select a species invisible
              null
            ) : (
              // key !== "targetSpecies", so just return the prompt and choices
              <div key={key}>
                <h2>{assistantForm[key].prompt}</h2>
                {assistantForm[key].responseContainer}
              </div>
            )
          )}
          <div className="submit-button-container">
            <button className="button submit-button" type="submit">
              HELP ME
            </button>
          </div>
        </div>
      </form>

      <AssistantModal
        formResponses={formResponses}
        fishData={fishes[formResponses.targetSpecies]}
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
