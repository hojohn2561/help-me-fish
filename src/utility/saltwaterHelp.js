import * as atlanticCroaker from "./fishHelp/atlanticCroaker";
import * as bluefish from "./fishHelp/bluefish";
import * as spot from "./fishHelp/spot";
import * as stripedBass from "./fishHelp/stripedBass";
import * as summerFlounder from "./fishHelp/summerFlounder";
import * as tautog from "./fishHelp/tautog";
import { isCloudConditionIdeal } from "./cloudCondition";
import { isTemperatureInRange } from "./temperature";
import { isWaterClarityIdeal } from "./waterClarity";

import constants from "./constants.json";

function getSaltwaterSpecificHelp(
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
  let specificHelpIntro;
  let specificLures;

  switch (speciesName) {
    // Find a way to remove this code duplication if possible.
    // Inheritance and overidding in the traditional sense of parent/child isn't possible/recommended in React because of components, and these aren't classes.
    case constants.species.atlanticCroaker:
      specificHelpIntro = atlanticCroaker.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange,
        idealWaterClarities
      );
      specificLures = atlanticCroaker.getSpecificLures();
      break;
    case constants.species.bluefish:
      specificHelpIntro = bluefish.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange,
        idealWaterClarities
      );
      specificLures = bluefish.getSpecificLures();
      break;
    case constants.species.spot:
      specificHelpIntro = spot.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange,
        idealWaterClarities
      );
      specificLures = spot.getSpecificLures();
      break;
    case constants.species.stripedBass:
      specificHelpIntro = stripedBass.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange,
        idealWaterClarities
      );
      specificLures = stripedBass.getSpecificLures();
      break;
    case constants.species.summerFlounder:
      specificHelpIntro = summerFlounder.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange,
        idealWaterClarities
      );
      specificLures = summerFlounder.getSpecificLures();
      break;
    case constants.species.tautog:
      specificHelpIntro = tautog.getSpecificHelpIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange,
        idealWaterClarities
      );
      specificLures = tautog.getSpecificLures();
      break;
    default:
      break;
  }

  help.push({
    intro: specificHelpIntro,
    lures: specificLures,
    // speciesName: constants.species.stripedBass, // Not needed for specific help
  });

  return help;
}

function getSaltwaterGeneralHelp(
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
        case constants.species.atlanticCroaker:
          specificHelpIntro = atlanticCroaker.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.bluefish:
          specificHelpIntro = bluefish.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.spot:
          specificHelpIntro = spot.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.stripedBass:
          specificHelpIntro = stripedBass.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.summerFlounder:
          specificHelpIntro = summerFlounder.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        case constants.species.tautog:
          specificHelpIntro = tautog.getSpecificHelpIntro(
            cloudCondition,
            waterClarity,
            waterTemperature,
            true, // == isIdealTemp
            fishesData[currentFishSpecies].idealCloudConditions,
            fishesData[currentFishSpecies].idealTemperatureRange
          );
          break;
        default:
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

export { getSaltwaterSpecificHelp, getSaltwaterGeneralHelp };
