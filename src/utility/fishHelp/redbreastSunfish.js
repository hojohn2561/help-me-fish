import freshwaterFishLureStrings from "../freshwaterFishLureStrings.json";
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
  let helpStr = `Fishing for redbreast sunfish when the water temperature is ${waterTemperature}°F `;

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

  helpStr += `Water clarity isn't that important when targeting redbreast sunfish, however, clear water is beneficial \
  because you may be able to sight fish for them in shallow water.`;

  return helpStr;
}

function getSpecificLures() {
  const { redbreastSunfish } = constants.species;

  let luresInfo = {
    intro: freshwaterFishLureStrings[redbreastSunfish].intro,
    types: {},
  };

  // Lure names
  const { crickets, grasshoppers, worms } = constants.lures;

  // Strings describing the lures
  const { general: generalCricketsStr } =
    freshwaterFishLureStrings[redbreastSunfish][crickets];
  const { general: generalGrasshoppersStr } =
    freshwaterFishLureStrings[redbreastSunfish][grasshoppers];
  const { general: generalWormsStr } =
    freshwaterFishLureStrings[redbreastSunfish][worms];

  let lureTypes = {};

  // Choosing which description to display, based on the user's input to the form
  lureTypes[worms] = {
    message: generalWormsStr,
    image: checkmark,
  };
  lureTypes[crickets] = {
    message: generalCricketsStr,
    image: indifferent,
  };
  lureTypes[grasshoppers] = {
    message: generalGrasshoppersStr,
    image: indifferent,
  };

  luresInfo.types = lureTypes;

  return luresInfo;
}

export { getSpecificHelpIntro, getSpecificLures };
