import db from "../firebase.config.js";

const getFish = async (waterType) => {
  const freshwaterFishesData = {};

  const querySnapshot = await db.collection(getCollectionName(waterType)).get();
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const fishName = doc.id;
    const fishData = doc.data();

    console.log(fishName);

    freshwaterFishesData[fishName] = { ...fishData };
  });

  return freshwaterFishesData;
};

const getCollectionName = (waterType) => {
  switch (waterType) {
    case "freshwater":
      return "FreshwaterFish";
    case "saltwater":
      return "SaltwaterFish";
  }
};

const exports = {
  getFish,
};

export default exports;
