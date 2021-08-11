import fishLureStrings from "../fishLureStrings.json";
import constants from "../constants.json";
import checkmark from "../../images/checkmark.svg";
import indifferent from "../../images/indifferent.png";
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

function getSpecificLures(cloudCondition, waterClarity, waterTemperature) {
  let luresInfo = {
    intro: fishLureStrings[constants.species.smallmouthBass].intro,
    types: {},
  };

  const { jerkbait, crankbait, rubberWorm, jig, spinnerbait } = constants.lures;

  const { general: generalCrankbaitStr } =
    fishLureStrings[constants.species.smallmouthBass][
      constants.lures.crankbait
    ];
  const { general: generalRubberWormStr, dismiss: dismissRubberWormStr } =
    fishLureStrings[constants.species.smallmouthBass][
      constants.lures.rubberWorm
    ];
  const {
    general: generalJerkbaitStr,
    prioritize: prioritizeJerkbaitStr,
    dismissUnclearWater: dismissUnclearWaterJerkbaitStr,
  } = fishLureStrings[constants.species.smallmouthBass][
    constants.lures.jerkbait
  ];
  const { general: generalJigStr, prioritize: prioritzeJigStr } =
    fishLureStrings[constants.species.smallmouthBass][constants.lures.jig];
  const { general: generalSpinnerbaitStr } =
    fishLureStrings[constants.species.smallmouthBass][
      constants.lures.spinnerbait
    ];

  let lureTypes = {};

  lureTypes[crankbait] = {
    message: generalCrankbaitStr,
    image: indifferent,
  };
  // Jerkbait prioritized
  if (shouldPrioritizeJerkbait(waterClarity, waterTemperature)) {
    lureTypes[jerkbait] = {
      message: prioritizeJerkbaitStr,
      image: checkmark,
    };
  }
  // Jerkbait dismissed
  else if (shouldDismissJerkbait(waterClarity)) {
    lureTypes[jerkbait] = {
      message: dismissUnclearWaterJerkbaitStr,
      image: x,
    };
  }
  // Jerkbait general
  else {
    lureTypes[jerkbait] = {
      message: generalJerkbaitStr,
      image: x,
    };
  }

  // Jig prioritized
  if (shouldPrioritizeJig(waterClarity)) {
    lureTypes[jig] = {
      message: prioritzeJigStr,
      image: checkmark,
    };
  }
  // Jig general
  else {
    lureTypes[jig] = {
      message: generalJigStr,
      image: indifferent,
    };
  }

  // Rubber worm dismissed
  if (shouldDismissRubberWorm(cloudCondition, waterTemperature)) {
    lureTypes[rubberWorm] = {
      message: dismissRubberWormStr,
      image: x,
    };
  } else {
    lureTypes[rubberWorm] = {
      message: generalRubberWormStr,
      image: indifferent,
    };
  }

  lureTypes[spinnerbait] = {
    message: generalSpinnerbaitStr,
    image: indifferent,
  };

  luresInfo.types = lureTypes;

  return luresInfo;
}

// Conditions for prioritizing jerkbait (clear water or cold water, but no surefire cold, so just using 60)
const shouldPrioritizeJerkbait = (waterClarity, waterTemperature) =>
  waterClarity === constants.waterClarities.clear ||
  parseInt(waterTemperature) < 60;

// Conditions for dismissing jerkbait (when water temperature is not clear, bass can't see the action)
const shouldDismissJerkbait = (waterClarity) =>
  waterClarity !== constants.waterClarities.clear;

// Conditions for prioritizing jig (spring and summer months, so warmer water, using arbitrary 65... or cold, arbitrary 60)
const shouldPrioritizeJig = (waterTemperature) =>
  parseInt(waterTemperature) > 65 || parseInt(waterTemperature) < 60;

// Conditions for dismissing rubber worm (when bass are active, so let's so ideal cloud conditions: partly cloudy and mostly cloudy... and in winter, so cold water temps, abitrary 40)
const shouldDismissRubberWorm = (cloudCondition, waterTemperature) =>
  parseInt(waterTemperature) <= 40 ||
  cloudCondition === constants.cloudConditions.partlyCloudy ||
  cloudCondition === constants.cloudConditions.mostlyCloudy;

export { getSpecificHelpIntro, getSpecificLures };
