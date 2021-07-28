import { isTemperatureInRange } from "./temperature";

function getSpecificHelp(
  speciesName,
  // Fish's ideal data
  idealCloudConditions,
  idealTemperatureRange,
  // Inputted form data
  cloudCondition,
  waterTemperature
) {
  let helpStr = `Fishing for ${speciesName.toLowerCase()} when the water temperature is ${waterTemperature}°F `;

  const isIdealTemp = isTemperatureInRange(
    waterTemperature,
    idealTemperatureRange
  );

  // Selected water temperature is inside the fish's ideal range
  if (isIdealTemp) {
    helpStr += `is a good idea. `;
    switch (speciesName) {
      case "Largemouth Bass":
        helpStr += `Because largemouth bass are cold-blooded creatures, they tend to be more active when the water is warmer. `;
        helpStr += getLargeMouthBassCloudConditionsStr(
          isIdealTemp,
          cloudCondition,
          idealCloudConditions
        );
        helpStr += getLargeMouthBassWaterClarityStr();

        break;
      default:
        break;
    }
  }
  // Selected water temperature is NOT inside the fish's ideal range
  else {
    helpStr += `may be difficult. Ideally, you want the temperature to be ${idealTemperatureRange}. `;
    switch (speciesName) {
      case "Largemouth Bass":
        helpStr += getLargeMouthBassCloudConditionsStr(
          isIdealTemp,
          cloudCondition,
          idealCloudConditions
        );
        helpStr += getLargeMouthBassWaterClarityStr();

      default:
        break;
    }
  }

  return helpStr;
}

function getLures(speciesName, waterClarity, waterTemperature) {
  let luresInfo = { intro: "", types: {} };

  switch (speciesName) {
    case "Largemouth Bass":
      luresInfo.intro = `When choosing a lure for largemouth bass, a variety of factors come into play, such as water depth, clarity of the water,\
        and temperature of the water.`;
      luresInfo = {
        ...luresInfo,
        types: getLargemouthBassLures(waterClarity, waterTemperature),
      };
      break;
  }

  return luresInfo;
}

function getLargemouthBassLures(waterClarity, waterTemperature) {
  let lureTypesInfo = {};

  // Jerkbait prioritized
  if (waterClarity === "Clear" && waterTemperature < 55)
    lureTypesInfo = {
      Crankbait: `Crankbaits work in almost all types of weather and can be used in a variety of depths of water.`,
      "Rubber Worms": `Rubber worms can be used in a wide variety of conditions, which is why they are so popular.\
        They can be rigged in many ways, allowing them to be used in both deep and shallow water.`,
      Jerkbait: `Jerkbaits would work well given the conditions you specified. They work well in clear water, colder water,\
        or when bass are actively feeding on baitfish. They are useful in a variety of weather and conditions. `,
    };
  // Default largemouth bass lures
  else
    lureTypesInfo = {
      Crankbait: `Crankbaits work in almost all types of weather and can be used in a variety of depths of water.`,
      Jerkbait: `Jerkbaits work well in clear water, cold water, or when bass are actively feeding on baitfish.\
        They are useful in a variety of weather and conditions. `,
      "Rubber Worms": `Rubber worms can be used in a wide variety of conditions, which is why they are so popular.\
        They can be rigged in many ways, allowing them to be used in both deep and shallow water.`,
    };

  return lureTypesInfo;
}

function getLargeMouthBassCloudConditionsStr(
  isIdealTemp,
  selectedCloudCondition,
  idealCloudConditions
) {
  let largeMouthBassCloudConditionsStr = "";

  if (isIdealTemp) {
    if (idealCloudConditions.includes(selectedCloudCondition))
      largeMouthBassCloudConditionsStr += `It's also good that the sky will be ${selectedCloudCondition.toLowerCase()}. `;
    else
      largeMouthBassCloudConditionsStr += `It also doesn't help that the sky will be ${selectedCloudCondition.toLowerCase()}. `;
  } else {
    if (idealCloudConditions.includes(selectedCloudCondition))
      largeMouthBassCloudConditionsStr += `However, the sky being ${selectedCloudCondition.toLowerCase()} will help. `;
    else
      largeMouthBassCloudConditionsStr += `It also doesn't help that the sky will be ${selectedCloudCondition.toLowerCase()}. `;
  }

  return largeMouthBassCloudConditionsStr;
}

function getLargeMouthBassWaterClarityStr() {
  return `As for water clarity, generally, the rule is the deeper the water you are fishing, the clearer you want it to be, and\
   the shallower the water, the more stained/dirty you want it to be. `;
}

export { getSpecificHelp, getLures };
