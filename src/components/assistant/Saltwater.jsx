import React, { useState, useEffect } from "react";

import Assistant from "./Assistant";
import FishCard from "./FishCard";
import data from "../../api/data";

import "./mainScreen.scss";

export default function Saltwater() {
  const [fishesData, setFishesData] = useState();

  useEffect(() => {
    getFreshwaterFish();
  }, []);

  const getFreshwaterFish = async () => {
    const freshwaterFishData = await data.getFish("saltwater");
    setFishesData(freshwaterFishData);
  };

  if (!fishesData) return null;

  return (
    <div className="content-container">
      <div className="assistant-container saltwater-assistant-container">
        <Assistant fishes={fishesData} />
      </div>

      <div className="fish-data-container">
        <div className="fish-data-content">
          <h1 className="fish-data-header">What We Know So Far:</h1>
          <div className="fish-cards-container">
            {Object.keys(fishesData).map((key) => (
              <FishCard name={key} imageUrl={fishesData[key].fishImageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
