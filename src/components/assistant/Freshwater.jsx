import React from "react";

import Assistant from "./Assistant";
import FishCard from "./FishCard";
import useFreshwaterFishData from "../../hooks/useFreshwaterFishData";

import "./mainScreen.scss";

export default function Freshwater() {
  const { freshwaterFishData: fishesData } = useFreshwaterFishData();

  if (!fishesData) return null;

  return (
    <div className="content-container">
      <div className="assistant-container freshwater-assistant-container">
        <Assistant fishesData={fishesData} />
      </div>

      <div className="fish-data-container">
        <div className="fish-data-content">
          <h1 className="fish-data-header">What We Know So Far</h1>
          <div className="fish-cards-container">
            {Object.keys(fishesData).map((key) => (
              <FishCard
                key={key}
                imageUrl={fishesData[key].fishImageUrls[0]}
                name={key}
                fishData={fishesData[key]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
