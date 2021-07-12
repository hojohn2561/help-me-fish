import React, { useState, useEffect } from "react";

import data from "../../api/data";
import "./assistant.scss";

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
      <div className="assistant-container saltwater-assistant-container"></div>
      <div className="fish-data-container">
        <div className="fish-data-content">
          <h1 className="fish-data-header">What We Know So Far:</h1>
          <div className="fish-cards">
            {Object.keys(fishesData).map((key) => (
              <div className="fish-card" key={key}>
                <div className="fish-card-content">
                  <div className="fish-card-image-container">
                    <img
                      alt={key}
                      className="fish-card-image"
                      src={fishesData[key].fishImageUrl}
                    />
                  </div>
                  <div className="fish-card-body">{key}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
