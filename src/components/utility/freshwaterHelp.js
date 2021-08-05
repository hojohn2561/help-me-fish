import { isTemperatureInRange } from "./temperature";
import * as largemouthBass from "./fishHelp/largemouthBass";
import * as brownTrout from "./fishHelp/brownTrout";

import constants from "./constants.json";

function getFreshwaterHelp(
  // Inputted target species, will be null if not selected
  speciesName,
  // Inputted form data
  cloudCondition,
  waterTemperature,
  waterClarity,
  // Fish's ideal data (optional, not needed if speciesName is null)
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
      return help;
    case constants.species.channelCatfish:
      return;
    case constants.species.commonCarp:
      return;
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
      return help;
    case constants.species.northernSnakehead:
      return;
    case constants.species.rainbowTrout:
      return;
    case constants.species.smnallmouthBass:
      return;
    default:
      // Logic to determine what fish help info to show depending on the user's responses to the form
      help.intro = largemouthBass.getGeneralHelpIntro();
      return help;
  }
}

export { getFreshwaterHelp };
