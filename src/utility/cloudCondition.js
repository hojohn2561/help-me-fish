// When given a cloud condition and fish's ideal cloud conditions array, determine whether given cloud condition is included the ideal cloud conditions array
function isCloudConditionIdeal(cloudCondition, idealCloudCondition = []) {
  // If water clarity is included in idealWaterClarities, return true. Otherwise, return false
  return idealCloudCondition.includes(cloudCondition) ? true : false;
}

export { isCloudConditionIdeal };
