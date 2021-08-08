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
  let helpStr = `Fishing for brown trout when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea. Water temperatures higher than 67°F means less dissolved oxygen in the water. At that point, brown trout are more focused on surviving, and getting more oxygen, than they are eating. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `By that same reasoning, it's also good that the sky will be ${cloudCondition.toLowerCase()}. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `It doesn't help that the sky will be ${cloudCondition.toLowerCase()} though because it will contribute in warming up the water. `;
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you want the temperature to be ${idealTemperatureRange}. Water temperatures higher than 67°F stresses brown trout out because there's less dissolved oxygen in the water. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `By that same reasoning, it's good that the sky will be ${cloudCondition.toLowerCase()} because it will help keep the water temperature a little lower. `;
    else
      helpStr += `It doesn't help that the sky will be ${cloudCondition.toLowerCase()} because it will contribute in warming up the water. `;
  }

  // Selected water clarity is one of the ideal water clarities for this fish
  if (idealWaterClarities.includes(waterClarity))
    helpStr += `Since brown trout are visual predators, it's good that the water clarity will be ${waterClarity.toLowerCase()}. They will be able to see your lure. `;
  // Selected water clarity is NOT one of the ideal water clarities for this fish
  else
    helpStr += `Also, it's not great that the water clarity will be ${waterClarity.toLowerCase()} because brown trout are visual predators. They need to see their prey to catch it. `;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {}

export { getSpecificHelpIntro, getSpecificLures };
