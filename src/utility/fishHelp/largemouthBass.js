import fishLureStrings from "../fishLureStrings.json";
import constants from "../constants.json";
import checkmark from "../../images/checkmark.svg";
import x from "../../images/x.svg";

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
  let helpStr = `Fishing for largemouth bass when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea. Because largemouth bass are cold-blooded creatures, they tend to be more active when the water is warmer. `;

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

  // Water clarity depends on water depth, which isn't asked for in the form, so just add a general statement about the water clarity
  helpStr += `As for water clarity, generally, the rule is the deeper the water you are fishing, the clearer you want it to be, and\
      the shallower the water, the more stained/dirty you want it to be.`;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {
  let luresInfo = {
    intro: fishLureStrings[constants.species.largemouthBass].intro,
    types: {},
  };

  const { jerkbait, crankbait, rubberWorm, jig, spinnerbait } = constants.lures;
  let generalCrankbaitStr =
    fishLureStrings[constants.species.largemouthBass][constants.lures.crankbait]
      .general;
  let generalRubberWormStr =
    fishLureStrings[constants.species.largemouthBass][
      constants.lures.rubberWorm
    ].general;
  let generalJerkbaitStr =
    fishLureStrings[constants.species.largemouthBass][constants.lures.jerkbait]
      .general;
  let generalJigStr =
    fishLureStrings[constants.species.largemouthBass][constants.lures.jig]
      .general;
  let generalSpinnerbaitStr =
    fishLureStrings[constants.species.largemouthBass][
      constants.lures.spinnerbait
    ].general;
  let prioritizeJerkbaitStr =
    fishLureStrings[constants.species.largemouthBass][constants.lures.jerkbait]
      .prioritized;
  let dismissJerkbaitStr =
    fishLureStrings[constants.species.largemouthBass][constants.lures.jerkbait]
      .dismissed;

  let lureTypes = {};

  // Jerkbait prioritized (water clarity clear, water temp < 55)
  if (
    waterClarity === constants.waterClarities.clear &&
    parseInt(waterTemperature) < 55
  ) {
    lureTypes = {
      [jerkbait]: {
        message: prioritizeJerkbaitStr,
        image: checkmark,
      },
      [crankbait]: {
        message: generalCrankbaitStr,
        image: checkmark,
      },
      [rubberWorm]: {
        message: generalRubberWormStr,
        image: checkmark,
      },
      [jig]: {
        message: generalJigStr,
        image: checkmark,
      },
      [spinnerbait]: {
        message: generalSpinnerbaitStr,
        image: checkmark,
      },
    };
  }
  // Jerkbait dismissed  (water clarity clear, water temp > 60)
  else if (
    waterClarity !== constants.waterClarities.clear &&
    parseInt(waterTemperature) > 60
  ) {
    lureTypes = {
      [jerkbait]: {
        message: dismissJerkbaitStr,
        image: x,
      },
      [crankbait]: {
        message: generalCrankbaitStr,
        image: checkmark,
      },
      [rubberWorm]: {
        message: generalRubberWormStr,
        image: checkmark,
      },
      [jig]: {
        message: generalJigStr,
        image: checkmark,
      },
      [spinnerbait]: {
        message: generalSpinnerbaitStr,
        image: checkmark,
      },
    };
  }
  // Default largemouth bass lures
  else {
    lureTypes = {
      [crankbait]: {
        message: generalCrankbaitStr,
        image: checkmark,
      },
      [jerkbait]: {
        message: generalJerkbaitStr,
        image: checkmark,
      },
      [rubberWorm]: {
        message: generalRubberWormStr,
        image: checkmark,
      },
      [jig]: {
        message: generalJigStr,
        image: checkmark,
      },
      [spinnerbait]: {
        message: generalSpinnerbaitStr,
        image: checkmark,
      },
    };
  }

  luresInfo.types = lureTypes;

  return luresInfo;
}

export { getSpecificHelpIntro, getSpecificLures };
