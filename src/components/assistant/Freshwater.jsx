import React, { useState, useEffect } from "react";

import data from "../../api/data";
import "./assistant.scss";
import FishCard from "./FishCard";

export default function Freshwater() {
  const [fishesData, setFishesData] = useState();

  useEffect(() => {
    getFreshwaterFish();
  }, []);

  const getFreshwaterFish = async () => {
    const freshwaterFishData = await data.getFish("freshwater");
    setFishesData(freshwaterFishData);
  };

  if (!fishesData) return null;

  return (
    <div className="content-container">
      <div className="assistant-container freshwater-assistant-container">
        <div className="assistant-card">
          <h1>Do you have a target species in mind?</h1>
          <div className="options-container">
            <div className="button yes-no-button">Yes</div>
            <div className="button yes-no-button">No</div>
          </div>
        </div>
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
