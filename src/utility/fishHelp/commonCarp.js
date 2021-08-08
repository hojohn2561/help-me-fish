// Called when user selected in form that they have a target species in mind
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
  let helpStr = `Fishing for common carp when the water temperature is ${waterTemperature}°F `;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {}

export { getSpecificHelpIntro, getSpecificLures };
