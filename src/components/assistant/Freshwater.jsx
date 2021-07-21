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
        <Assistant fishes={fishesData} />
      </div>

      <div className="fish-data-container">
        <div className="fish-data-content">
          <h1 className="fish-data-header">What We Know So Far:</h1>
          <div className="fish-cards-container">
            {Object.keys(fishesData).map((key) => (
              <>
                <FishCard
                  key={key}
                  name={key}
                  imageUrl={fishesData[key].fishImageUrl}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
