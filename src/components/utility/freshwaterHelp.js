import { isTemperatureInRange } from "./temperature";
import * as largemouthBassHelp from "./largemouthBassHelp";

import constants from "./constants.json";

function getFreshwaterHelp(
  speciesName,
  // Fish's ideal data
  idealCloudConditions,
  idealTemperatureRange,
  // Inputted form data
  cloudCondition,
  waterTemperature,
  waterClarity
) {
  const help = { intro: "", lures: {} };
  const isIdealTemp = isTemperatureInRange(
    waterTemperature,
    idealTemperatureRange
  );

  switch (speciesName) {
    case constants.species.brownTrout:
      return;
    case constants.species.channelCatfish:
      return;
    case constants.species.commonCarp:
      return;
    case constants.species.largemouthBass:
      help.intro = largemouthBassHelp.getSpecificInfoIntro(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = largemouthBassHelp.getSpecificLures(
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
  }
}

export { getFreshwaterHelp };
