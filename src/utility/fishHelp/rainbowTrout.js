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
  let helpStr = `Fishing for rainbow trout when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea. When the water temperature reaches higher than 67°F, that means less dissolved oxygen in the water. Rainbow trout will be more focused on surviving, \
    and getting more oxygen, than they are eating. Enticing them to bite no matter what lure you use may be difficult. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `By that same reasoning, it's also good that the sky will be ${cloudCondition.toLowerCase()}. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `It doesn't help that the sky will be ${cloudCondition.toLowerCase()} though because it will contribute in warming up the water. `;
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you want the temperature to be ${idealTemperatureRange}. Water temperatures higher than 67°F stresses rainbow trout out because there's less \
    dissolved oxygen in the water. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `By that same reasoning, it's good that the sky will be ${cloudCondition.toLowerCase()} because it will help keep the water temperature down. `;
    else
      helpStr += `It doesn't help that the sky will be ${cloudCondition.toLowerCase()} because it will contribute in warming up the water. `;
  }

  // Selected water clarity condition is one of the ideal water clarities for this fish
  if (idealWaterClarities.includes(waterClarity))
    helpStr += `Since rainbow trout are visual predators, it's good that the water clarity will be ${waterClarity.toLowerCase()}. They will be able to see your lure. `;
  // Selected water clarity is NOT one of the ideal water clarities for this fish
  else
    helpStr += `Also, it's not great that the water clarity will be ${waterClarity.toLowerCase()} because rainbow trout are visual predators. They need to see their prey to catch it. `;

  return helpStr;
}

function getSpecificLures(cloudCondition, waterClarity, waterTemperature) {
  const { rainbowTrout } = constants.species;

  let luresInfo = {
    intro: fishLureStrings[rainbowTrout].intro,
    types: {},
  };

  // Lure names
  const { inlineSpinner, roosterTail, troutMagnet } = constants.lures;

  // Strings describing the lures
  const {
    general: generalInlineSpinnerStr,
    prioritize: prioritizeInlineSpinnerStr,
  } = fishLureStrings[rainbowTrout][inlineSpinner];
  const {
    general: generalRoosterTailStr,
    prioritize: prioritizeRoosterTailStr,
  } = fishLureStrings[rainbowTrout][roosterTail];
  const { general: generalTroutMagnetStr } =
    fishLureStrings[rainbowTrout][troutMagnet];

  let lureTypes = {};

  // Choosing which description to display, based on the user's input to the form
  // If spinner/Rooster tail should be prioritized, display the prioritized message. Otherwise, display the general message
  if (shouldPrioritizeInlineSpinner(cloudCondition)) {
    lureTypes[inlineSpinner] = {
      message: prioritizeInlineSpinnerStr,
      image: checkmark,
    };
    lureTypes[roosterTail] = {
      message: prioritizeRoosterTailStr,
      image: checkmark,
    };
  } else {
    lureTypes[inlineSpinner] = {
      message: generalInlineSpinnerStr,
      image: indifferent,
    };
    lureTypes[roosterTail] = {
      message: generalRoosterTailStr,
      image: indifferent,
    };
  }

  lureTypes[troutMagnet] = {
    message: generalTroutMagnetStr,
    image: indifferent,
  };

  luresInfo.types = lureTypes;

  return luresInfo;
}

const shouldPrioritizeInlineSpinner = (cloudCondition) =>
  cloudCondition === constants.cloudConditions.partlyCloudy ||
  cloudCondition === constants.cloudConditions.mostlyCloudy;

export { getSpecificHelpIntro, getSpecificLures };
