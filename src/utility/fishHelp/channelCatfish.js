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
  let helpStr = `Fishing for channel catfish when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += ` is a good idea.`;
  } else {
    helpStr += `may be difficult. Ideally, you'd want the water temperature to be ${idealTemperatureRange}. `;
  }

  helpStr += `It's OK if the weather is ${cloudCondition.toLowerCase()} because channel catfish can be fished for year-round, and they are still active during any weather condition. `;
  helpStr += `Water clarity also isn't that important of a factor when fishing for channel cats because they don't rely solely on their eyesight to find food. \
  In addition to sight, they also use a combination of their whiskers, which act as sensory organs, taste buds, by first picking up the food with their mouth and spitting it out if \
  it's inedible, and sense of smell. `;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {}

export { getSpecificHelpIntro, getSpecificLures };
