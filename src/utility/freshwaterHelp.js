import * as bluegill from "./fishHelp/bluegill";
import * as brownTrout from "./fishHelp/brownTrout";
import * as channelCatfish from "./fishHelp/channelCatfish";
import * as commonCarp from "./fishHelp/commonCarp";
import * as largemouthBass from "./fishHelp/largemouthBass";
import * as northernSnakehead from "./fishHelp/northernSnakehead";
import * as rainbowTrout from "./fishHelp/rainbowTrout";
import * as redbreastSunfish from "./fishHelp/redbreastSunfish";
import * as smallmouthBass from "./fishHelp/smallmouthBass";
import { isCloudConditionIdeal } from "./cloudCondition";
import { isTemperatureInRange } from "./temperature";
import { isWaterClarityIdeal } from "./waterClarity";

import constants from "./constants.json";

function getFreshwaterSpecificHelp(
  // Inputted target species
  speciesName,
  // Inputted form data
  cloudCondition,
  waterTemperature,
  waterClarity,
  // Fish's ideal data. Can't use context to get them because this is a module outside component, so needs to get passed as an argument.
  idealCloudConditions,
  idealTemperatureRange
) {
  const help = []; // Array to handle when multiple fish are returned
  const isIdealTemp = isTemperatureInRange(
    waterTemperature,
    idealTemperatureRange
  );

  switch (speciesName) {
    // Find a way to remove this code duplication if possible.
    // Inheritance and overidding in the traditional sense of parent/child isn't possible/recommended in React because of components, and these aren't classes.
    case constants.species.bluegill:
      help.intro = bluegill.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.bluegill;
      break;
    case constants.species.brownTrout:
      help.intro = brownTrout.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.brownTrout;
      break;
    case constants.species.channelCatfish:
      help.intro = channelCatfish.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.channelCatfish;
      break;
    case constants.species.commonCarp:
      help.intro = commonCarp.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.commonCarp;
      break;
    case constants.species.largemouthBass:
      help.intro = largemouthBass.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = largemouthBass.getSpecificLures(
        waterClarity,
        waterTemperature
      );
      help.speciesName = constants.species.largemouthBass;
      break;
    case constants.species.northernSnakehead:
      help.intro = northernSnakehead.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.northernSnakehead;
      break;
    case constants.species.rainbowTrout:
      help.intro = rainbowTrout.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.rainbowTrout;
      break;
    case constants.species.smallmouthBass:
      help.intro = smallmouthBass.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.smallmouthBass;
      break;
    case constants.species.redbreastSunfish:
      help.intro = redbreastSunfish.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = { types: [] };
      help.speciesName = constants.species.redbreastSunfish;
      break;
    default:
      break;
  }

  return help;
}

function getFreshwaterGeneralHelp(
  // Inputted form data
  cloudCondition,
  waterTemperature,
  waterClarity,
  // Data for all the freshwater/saltwater fish
  fishesData
) {
  const help = []; // Array to handle when multiple fish are returned

  // Conditions to suggest for brown trout
  if (
    isTempInFishIdealRange(
      waterTemperature,
      fishesData[constants.species.bluegill]
    ) &&
    isCloudConditionIdeal(
      cloudCondition,
      fishesData[constants.species.bluegill].idealCloudConditions
    )
  ) {
    help.push({
      intro: bluegill.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        true, // == isIdealTemp
        fishesData[constants.species.bluegill].idealCloudConditions,
        fishesData[constants.species.bluegill].idealTemperatureRange
      ),
      lures: { types: [] },
      speciesName: constants.species.bluegill,
    });
  }
  if (
    isTempInFishIdealRange(
      waterTemperature,
      fishesData[constants.species.brownTrout]
    ) &&
    isCloudConditionIdeal(
      cloudCondition,
      fishesData[constants.species.brownTrout].idealCloudConditions
    )
  ) {
    help.push({
      intro: brownTrout.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        true, // == isIdealTemp
        fishesData[constants.species.brownTrout].idealCloudConditions,
        fishesData[constants.species.brownTrout].idealTemperatureRange,
        fishesData[constants.species.brownTrout].idealWaterClarities
      ),
      lures: { types: [] },
      speciesName: constants.species.brownTrout,
    });
  }
  // Conditions to suggest for channel catfish
  if (
    isTempInFishIdealRange(
      waterTemperature,
      fishesData[constants.species.channelCatfish]
    ) &&
    isCloudConditionIdeal(
      cloudCondition,
      fishesData[constants.species.channelCatfish].idealCloudConditions
    )
  ) {
    help.push({
      intro: channelCatfish.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        true, // == isIdealTemp
        fishesData[constants.species.channelCatfish].idealCloudConditions,
        fishesData[constants.species.channelCatfish].idealTemperatureRange
      ),
      lures: { types: [] },
      speciesName: constants.species.channelCatfish,
    });
  }

  // Conditions to suggest for largemouth bass
  if (
    isTempInFishIdealRange(
      waterTemperature,
      fishesData[constants.species.largemouthBass]
    ) &&
    isCloudConditionIdeal(
      cloudCondition,
      fishesData[constants.species.largemouthBass].idealCloudConditions
    )
  ) {
    help.push({
      intro: largemouthBass.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        true, // == isIdealTemp
        fishesData[constants.species.largemouthBass].idealCloudConditions,
        fishesData[constants.species.largemouthBass].idealTemperatureRange
      ),
      lures: { types: [] },
      speciesName: constants.species.largemouthBass,
    });
  }
  // Conditions to suggest for brown trout
  if (
    isTempInFishIdealRange(
      waterTemperature,
      fishesData[constants.species.rainbowTrout]
    ) &&
    isCloudConditionIdeal(
      cloudCondition,
      fishesData[constants.species.rainbowTrout].idealCloudConditions
    )
  ) {
    help.push({
      intro: rainbowTrout.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        true, // == isIdealTemp
        fishesData[constants.species.rainbowTrout].idealCloudConditions,
        fishesData[constants.species.rainbowTrout].idealTemperatureRange,
        fishesData[constants.species.rainbowTrout].idealWaterClarities
      ),
      lures: { types: [] },
      speciesName: constants.species.rainbowTrout,
    });
  }

  return help;
}

// Arrow function is cleaner to return just boolean for whether temperature is in fish's ideal range
const isTempInFishIdealRange = (waterTemperature, fishData) =>
  isTemperatureInRange(waterTemperature, fishData.idealTemperatureRange);

export { getFreshwaterSpecificHelp, getFreshwaterGeneralHelp };
