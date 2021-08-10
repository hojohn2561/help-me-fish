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
  idealTemperatureRange,
  idealWaterClarities
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
      help.push({
        intro: bluegill.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.bluegill,
      });
      break;
    case constants.species.brownTrout:
      help.push({
        intro: brownTrout.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.brownTrout,
      });
      break;
    case constants.species.channelCatfish:
      help.push({
        intro: channelCatfish.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.channelCatfish,
      });
      break;
    case constants.species.commonCarp:
      help.push({
        intro: commonCarp.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.commonCarp,
      });
      break;
    case constants.species.largemouthBass:
      help.push({
        intro: largemouthBass.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.largemouthBass,
      });
      break;
    case constants.species.northernSnakehead:
      help.push({
        intro: northernSnakehead.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.northernSnakehead,
      });
      break;
    case constants.species.rainbowTrout:
      help.push({
        intro: rainbowTrout.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.rainbowTrout,
      });
      break;
    case constants.species.redbreastSunfish:
      help.push({
        intro: redbreastSunfish.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.redbreastSunfish,
      });
      break;
    case constants.species.smallmouthBass:
      help.push({
        intro: smallmouthBass.getSpecificHelpIntro(
          cloudCondition,
          waterClarity,
          waterTemperature,
          isIdealTemp,
          idealCloudConditions,
          idealTemperatureRange,
          idealWaterClarities
        ),
        lures: { types: [] },
        speciesName: constants.species.smallmouthBass,
      });
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
  const fishSpeciesNames = Object.keys(fishesData);

  // This for loop is much cleaner, reduces code duplication, and more maintainable, than have an individual if statement doing the same thing for every fish.
  // The switch statement here though is needed in order to user the correct module.
  // Given the user's input from the form, see which fish can be suggested to fish for based on those values.
  for (let i = 0; i < fishSpeciesNames.length; i++) {
    let currentFishSpecies = fishSpeciesNames[i];
    if (
      isTempInFishIdealRange(
        waterTemperature,
        fishesData[currentFishSpecies]
      ) &&
      isCloudConditionIdeal(
        cloudCondition,
        fishesData[currentFishSpecies].idealCloudConditions
      ) &&
      isWaterClarityIdeal(
        waterClarity,
        fishesData[currentFishSpecies].idealWaterClarities
      )
    ) {
      let specificHelpIntro;
      switch (currentFishSpecies) {
        case constants.species.bluegill:
          specificHelpIntro = bluegill.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.brownTrout:
          specificHelpIntro = brownTrout.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.channelCatfish:
          specificHelpIntro = channelCatfish.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.commonCarp:
          specificHelpIntro = commonCarp.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.largemouthBass:
          specificHelpIntro = largemouthBass.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.northernSnakehead:
          specificHelpIntro = northernSnakehead.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.rainbowTrout:
          specificHelpIntro = rainbowTrout.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.redbreastSunfish:
          specificHelpIntro = redbreastSunfish.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.smallmouthBass:
          specificHelpIntro = smallmouthBass.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
      }

      help.push({
        intro: specificHelpIntro,
        lures: { types: [] },
        speciesName: currentFishSpecies,
      });
    }
  }

  return help;
}

// Arrow function is cleaner to return just boolean for whether temperature is in fish's ideal range
const isTempInFishIdealRange = (waterTemperature, fishData) =>
  isTemperatureInRange(waterTemperature, fishData.idealTemperatureRange);

export { getFreshwaterSpecificHelp, getFreshwaterGeneralHelp };
