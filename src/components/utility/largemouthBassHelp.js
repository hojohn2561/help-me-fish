import fishLureStrings from "./fishLureStrings.json";
import constants from "./constants.json";

function getSpecificInfo(
  cloudCondition,
  waterClarity,
  waterTemperature,
  isIdealTemp,
  idealCloudConditions,
  idealTemperatureRange
) {
  let helpStr = `Fishing for largemouth bass when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea Because largemouth bass are cold-blooded creatures, they tend to be more active when the water is warmer. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `It's also good that the sky will be ${cloudCondition.toLowerCase()}. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `It also doesn't help that the sky will be ${cloudCondition.toLowerCase()}. `;
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you want the temperature to be ${idealTemperatureRange}. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `However, the sky being ${cloudCondition.toLowerCase()} will help. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `It also doesn't help that the sky will be ${cloudCondition.toLowerCase()}. `;
  }

  helpStr += `As for water clarity, generally, the rule is the deeper the water you are fishing, the clearer you want it to be, and\
      the shallower the water, the more stained/dirty you want it to be.`;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {
  let luresInfo = {
    intro: fishLureStrings[constants.species.largemouthBass].intro,
    types: {},
  };

  let lureTypes = {};

  // Jerkbait prioritized
  if (
    waterClarity === constants.waterClarities.clear &&
    waterTemperature < 55
  ) {
    lureTypes = {
      Jerkbait:
        fishLureStrings[constants.species.largemouthBass].Jerkbait.prioritzed,
      Crankbait:
        fishLureStrings[constants.species.largemouthBass].Crankbait.general,
      "Rubber Worm":
        fishLureStrings[constants.species.largemouthBass]["Rubber Worm"]
          .general,
    };
  } else if (
    waterClarity !== constants.waterClarities.clear &&
    waterTemperature > 60
  ) {
    lureTypes = {
      [constants.lures.jerkbait]:
        fishLureStrings[constants.species.largemouthBass].Jerkbait.dismissed,
      [constants.lures.crankbait]:
        fishLureStrings[constants.species.largemouthBass].Crankbait.general,
      [constants.lures.rubberWorm]:
        fishLureStrings[constants.species.largemouthBass][
          constants.lures.rubberWorm
        ].general,
    };
  }
  // Default largemouth bass lures
  else {
    lureTypes = {
      [constants.lures.crankbait]:
        fishLureStrings[constants.species.largemouthBass].Jerkbait.general,
      [constants.lures.jerkbait]:
        fishLureStrings[constants.species.largemouthBass].Crankbait.general,
      [constants.lures.rubberWorm]:
        fishLureStrings[constants.species.largemouthBass][
          constants.lures.rubberWorm
        ].general,
    };
  }

  luresInfo.types = lureTypes;

  return luresInfo;
}

export { getSpecificInfo, getSpecificLures };
