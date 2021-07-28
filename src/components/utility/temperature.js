// When given a temperature value and fish's ideal temperature range string, determines whether given temperature is in the ideal range
function isTemperatureInRange(temperature, temperatureRange = "") {
  const temperatureRangeVals = temperatureRange.replaceAll("°F", "").split("-");
  const maxTemp = temperatureRangeVals[1];
  const minTemp = temperatureRangeVals[0];

  // If given temp is in range, return true. Otherwise, return false
  return temperature >= minTemp && temperature <= maxTemp ? true : false;
}

export { isTemperatureInRange };
