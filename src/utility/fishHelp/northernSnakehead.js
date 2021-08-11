import fishLureStrings from "../fishLureStrings.json";
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
  let helpStr = `Fishing for northern snakehead when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `The sky being ${cloudCondition.toLowerCase()} is also good. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `However, the weather condition being ${cloudCondition.toLowerCase()} is not good. `;
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you'd want the water temperature to be ${idealTemperatureRange}. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `However, the weather condition being ${cloudCondition.toLowerCase()} is good. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `The weather condition being ${cloudCondition.toLowerCase()} is also not good. `;
  }

  helpStr += `Water clarity isn't that important when targeting snakeheads because they can thrive in a variety of conditions. `;

  return helpStr;
}

function getSpecificLures() {
  const { northernSnakehead } = constants.species;

  let luresInfo = {
    intro: fishLureStrings[northernSnakehead].intro,
    types: {},
  };

  // Lure names
  const { swimBait, topwaterFrog } = constants.lures;

  // Strings describing the lures
  const { general: generalSwimBaitStr } =
    fishLureStrings[northernSnakehead][swimBait];
  const { general: generalTopwaterFrogStr } =
    fishLureStrings[northernSnakehead][topwaterFrog];

  let lureTypes = {};

  // Choosing which description to display, based on the user's input to the form
  lureTypes[topwaterFrog] = {
    message: generalTopwaterFrogStr,
    image: checkmark,
  };
  lureTypes[swimBait] = {
    message: generalSwimBaitStr,
    image: indifferent,
  };
  luresInfo.types = lureTypes;

  return luresInfo;
}

export { getSpecificHelpIntro, getSpecificLures };
