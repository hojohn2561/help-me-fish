import { isTemperatureInRange } from "./temperature";
import * as brownTrout from "./fishHelp/brownTrout";
import * as channelCatfish from "./fishHelp/channelCatfish";
import * as largemouthBass from "./fishHelp/largemouthBass";

import constants from "./constants.json";

function getFreshwaterHelp(
  // Inputted target species, will be null if not selected
  speciesName,
  // Inputted form data
  cloudCondition,
  waterTemperature,
  waterClarity,
  // Fish's ideal data (optional parameters, not needed if speciesName is null).
  // Can't use context to get because module outside component, so needs to get passed as an argument.
  idealCloudConditions,
  idealTemperatureRange
) {
  const help = { intro: "", lures: {} };
  const isIdealTemp = isTemperatureInRange(
    waterTemperature,
    idealTemperatureRange
  );

  switch (speciesName) {
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
      break;
    case constants.species.commonCarp:
      help.lures = { types: [] };
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
      break;
    case constants.species.northernSnakehead:
      help.lures = { types: [] };
      break;
    case constants.species.rainbowTrout:
      help.lures = { types: [] };
      break;
    case constants.species.smnallmouthBass:
      help.lures = { types: [] };
      break;
    default:
      // Logic to determine what fish help info to show depending on the user's responses to the form
      help.intro = largemouthBass.getGeneralHelpIntro();
      break;
  }

  return help;
}

export { getFreshwaterHelp };
