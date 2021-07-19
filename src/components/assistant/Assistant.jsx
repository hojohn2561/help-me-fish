import React, { useState } from "react";

import "./assistant.scss";

const temperatureValues = [
  "< 50",
  ...Array.from(Array(100).keys()).splice(51, 100), // Generate array of numbers from 51 to 99
  "> 100",
];

const cloudConditions = [
  "Mostly Sunny",
  "Partly Cloudy",
  "Mostly Cloudy",
  "Light Showers",
  "Heavy Rain",
  "Thunderstorms",
  "Snow",
];

const waterClarities = ["Clear", "Partly Stained", "Stained"];

export default function Assistant({ fishes }) {
  // State variable for form values
  const [formResponses, setFormResponses] = useState({
    hasTargetSpecies: null,
    targetSpecies: null,
    waterTemperature: null,
    cloudCondition: null,
    waterClarity: null,
  });

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
              <option value={species} key={species}>
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
              <option value={waterTemp} key={waterTemp}>
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
              <option value={cloudCondition} key={cloudCondition}>
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
              <option value={waterClarity} key={waterClarity}>
                {waterClarity}
              </option>
            ))}
          </select>
        </div>
      ),
    },
  };

  const updateValues = (fieldName, fieldValue) => {
    setFormResponses({ ...formResponses, [fieldName]: fieldValue });
  };

  const getHelp = (event) => {
    event.preventDefault();
    console.log(formResponses);

    // If form contains no null values (in other words, all fields have a response)
    if (!Object.values(formResponses).includes(null)) {
      if (formResponses.hasTargetSpecies)
        console.log(`Show tips for ${formResponses.targetSpecies}`);
      else
        console.log(
          `Suggest what to species to target, what to use, and techniques`
        );
    } else console.log("null values in form, can't provide help yet");
  };

  return (
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
  );
}
