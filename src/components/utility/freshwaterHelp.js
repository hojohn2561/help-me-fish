import { isTemperatureInRange } from "./temperature";
import { getSpecificInfo, getSpecificLures } from "./largemouthBassHelp";

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
    case "Largemouth Bass":
      help.intro = getSpecificInfo(
        cloudCondition,
        waterClarity,
        waterTemperature,
        isIdealTemp,
        idealCloudConditions,
        idealTemperatureRange
      );
      help.lures = getSpecificLures(waterClarity, waterTemperature);
      return help;
  }
}

export { getFreshwaterHelp };
