function getSpecificInfo(
  cloudCondition,
  waterClarity,
  waterTemperature,
  isIdealTemp,
  idealCloudConditions,
  idealTemperatureRange
) {
  let helpStr = `Fishing for largemouth bass when the water temperature is ${waterTemperature}°F `;

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea Because largemouth bass are cold-blooded creatures, they tend to be more active when the water is warmer. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `It's also good that the sky will be ${cloudCondition.toLowerCase()}. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `It also doesn't help that the sky will be ${cloudCondition.toLowerCase()}. `;
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you want the temperature to be ${idealTemperatureRange}. `;

    // Selected cloud condition is one of the ideal cloud conditions for this fish
    if (idealCloudConditions.includes(cloudCondition))
      helpStr += `However, the sky being ${cloudCondition.toLowerCase()} will help. `;
    // Selected cloud condition is NOT one of the ideal cloud conditions for this fish
    else
      helpStr += `It also doesn't help that the sky will be ${cloudCondition.toLowerCase()}. `;
  }

  helpStr += `As for water clarity, generally, the rule is the deeper the water you are fishing, the clearer you want it to be, and\
      the shallower the water, the more stained/dirty you want it to be.`;

  return helpStr;
}

function getSpecificLures(waterClarity, waterTemperature) {
  let luresInfo = {
    intro:
      "When choosing a lure for largemouth bass, a variety of factors come into play, such as water depth, clarity of the water,\
       and temperature of the water.",
    types: {},
  };

  const crankbaitInfoStr = `Crankbaits work in almost all types of weather and can be used in a variety of depths of water.`;
  const rubberWormsInfoStr = `Rubber worms can be used in a wide variety of conditions, which is why they are so popular.\
  They can be rigged in many ways, allowing them to be used in both deep and shallow water.`;
  const jerkbaitInfoStr = `Jerkbaits would work well given the conditions you specified. They work well in clear water, colder water,\
  or when bass are actively feeding on baitfish. They are useful in a variety of weather and conditions.`;
  let lureTypes = {};

  // Jerkbait prioritized
  if (waterClarity === "Clear" && waterTemperature < 55) {
    lureTypes = {
      Crankbait: crankbaitInfoStr,
      "Rubber Worms": rubberWormsInfoStr,
      Jerkbait: jerkbaitInfoStr,
    };
  }
  // Default largemouth bass lures
  else {
    lureTypes = {
      Crankbait: crankbaitInfoStr,
      Jerkbait: jerkbaitInfoStr,
      "Rubber Worms": rubberWormsInfoStr,
    };
  }

  luresInfo.types = lureTypes;

  return luresInfo;
}

export { getSpecificInfo, getSpecificLures };
