import fishLureStrings from "../fishLureStrings.json";
import constants from "../constants.json";

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
  let helpStr = `Fishing for smallmouth bass when the water temperature is ${waterTemperature}°F `;
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

  // Water clarity depends on water depth, which isn't asked for in the form, so just add a general statement about the water clarity
  helpStr += `As for water clarity, like largemouth bass, the rule is the deeper the water you are fishing, the clearer you want it to be, and\
    the shallower the water, the more stained/dirty you want it to be.`;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {
  let luresInfo = {
    intro: fishLureStrings[constants.species.smallmouthBass].intro,
    types: {},
  };

  return luresInfo;
}

export { getSpecificHelpIntro, getSpecificLures };
