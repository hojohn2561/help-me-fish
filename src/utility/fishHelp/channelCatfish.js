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

function getSpecificLures(waterClarity, waterTemperature) {
  const { channelCatfish } = constants.species;

  let luresInfo = {
    intro: freshwaterFishLureStrings[channelCatfish].intro,
    types: {},
  };

  // Lure names
  const { chickenLiver, shrimp, stinkBait, worms } = constants.lures;

  // Strings describing the lures
  const { general: generalWormsStr } =
    freshwaterFishLureStrings[channelCatfish][worms];
  const { general: generalShrimpStr } =
    freshwaterFishLureStrings[channelCatfish][shrimp];
  const {
    general: generalStinkBaitStr,
    prioritizeWarmWater: prioritizeWarmWaterStinkBaitStr,
    prioritizeUnclearWater: prioritizeUnclearWaterStinkBaitStr,
  } = freshwaterFishLureStrings[channelCatfish][stinkBait];
  const {
    general: generalChickenLiverStr,
    prioritizeWarmWater: prioritizeWarmWaterChickenLiverStr,
    prioritizeUnclearWater: prioritizeUnclearWaterChickenLiverStr,
  } = freshwaterFishLureStrings[channelCatfish][chickenLiver];

  let lureTypes = {};

  // Choosing which description to display, based on the user's input to the form
  lureTypes[worms] = {
    message: generalWormsStr,
    image: checkmark,
  };
  lureTypes[shrimp] = {
    message: generalShrimpStr,
    image: indifferent,
  };
  // Stink bait prioritized when water is warm or has low visibility
  if (shouldPrioritizeUnclearWaterStinkBait(waterClarity)) {
    lureTypes[stinkBait] = {
      message: prioritizeUnclearWaterStinkBaitStr,
      image: checkmark,
    };
    lureTypes[chickenLiver] = {
      message: prioritizeUnclearWaterChickenLiverStr,
      image: checkmark,
    };
  } else if (shouldPrioritizeWarmWaterStinkBait(waterTemperature)) {
    lureTypes[stinkBait] = {
      message: prioritizeWarmWaterStinkBaitStr,
      image: checkmark,
    };
    lureTypes[chickenLiver] = {
      message: prioritizeWarmWaterChickenLiverStr,
      image: checkmark,
    };
  } else {
    lureTypes[stinkBait] = {
      message: generalStinkBaitStr,
      image: indifferent,
    };
    lureTypes[chickenLiver] = {
      message: generalChickenLiverStr,
      image: indifferent,
    };
  }

  luresInfo.types = lureTypes;

  return luresInfo;
}

// Conditions for prioritizing stink bait (warm water, but no warm cold, so just using 70, or water with low visibility)
const shouldPrioritizeWarmWaterStinkBait = (waterTemperature) =>
  parseInt(waterTemperature) >= 70;
const shouldPrioritizeUnclearWaterStinkBait = (waterClarity) =>
  waterClarity === constants.waterClarities.stained;

export { getSpecificHelpIntro, getSpecificLures };
