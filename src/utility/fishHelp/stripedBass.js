import saltwaterFishLureStrings from "../saltwaterFishLureStrings.json";
import constants from "../constants.json";
import checkmark from "../../images/checkmark.svg";
import indifferent from "../../images/indifferent.png";

// Called to get intro paragraph for help modal for fishing for this fish
function getSpecificHelpIntro(
  cloudCondition,
  waterClarity,
  waterTemperature,
  isIdealTemp,
  // Can't use context to get these two parameter values because module method outside component, so needs to get passed as an argument.
  idealCloudConditions,
  idealTemperatureRange,
  idealWaterClarities
) {
  let helpStr = `Fishing for stripers when the water temperature is ${waterTemperature}°F `;

  return helpStr;
}

function getSpecificLures() {
  const { stripedBass } = constants.species;

  let luresInfo = {
    intro: saltwaterFishLureStrings[stripedBass].intro,
    types: {},
  };

  // Lure names

  // Strings describing the lures

  let lureTypes = {};

  // Choosing which description to display, based on the user's input to the form

  luresInfo.types = lureTypes;

  return luresInfo;
}

export { getSpecificHelpIntro, getSpecificLures };
