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

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `The sky being ${cloudCondition.toLowerCase()} is also good. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `However, the weather condition being ${cloudCondition.toLowerCase()} is not good. `;
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you'd want the water temperature to be ${idealTemperatureRange}. Carps can actually be caught all year round, \
    but are generally more active when the water is warmer. Once signs of the colder months arrive, their feeding activity slows down and it will become \
    harder to catch them. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `It's good that the weather will be ${cloudCondition.toLowerCase()}. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `The weather condition being ${cloudCondition.toLowerCase()} is also not good. `;
  }

  helpStr += `Because carp are easily spooked, you'd want the water to be dirty and/or muddy. `;
  // Selected water clarity is one of the ideal water clarities for this fish
  if (idealWaterClarities.includes(waterClarity))
    helpStr += `Therefore, it's good that the water clarity is ${waterClarity.toLowerCase()}. `;
  // Selected water clarity is NOT one of the ideal water clarities for this fish
  else
    helpStr += `Therefore, it's not great that the water clarity will be ${waterClarity.toLowerCase()}. `;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {}

export { getSpecificHelpIntro, getSpecificLures };
