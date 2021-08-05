import fishLureStrings from "../fishLureStrings.json";
import constants from "../constants.json";
import checkmark from "../../../images/checkmark.svg";
import x from "../../../images/x.svg";

// Called when user selected in form that they DID NOT have a target species in mind
function getGeneralHelpIntro() {
  return "GENERAL BROWN TROUT HELP INFO";
}

// Called when user selected in form that they have a target species in mind
function getSpecificHelpIntro(
  cloudCondition,
  waterClarity,
  waterTemperature,
  isIdealTemp,
  // Can't use context to get these two parameter values because module method outside component, so needs to get passed as an argument.
  idealCloudConditions,
  idealTemperatureRange
) {
  let helpStr = `Fishing for channel catfish when the water temperature is ${waterTemperature}°F `;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {}

export { getGeneralHelpIntro, getSpecificHelpIntro, getSpecificLures };
