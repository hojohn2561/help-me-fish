// When given a water clarity and fish's ideal water clarities array, determine whether given water clarity is included the ideal water clarities
function isWaterClarityIdeal(waterClarity, idealWaterClarities = []) {
  // If water clarity is included in idealWaterClarities, return true. Otherwise, return false
  return idealWaterClarities.includes(waterClarity) ? true : false;
}

export { isWaterClarityIdeal };
