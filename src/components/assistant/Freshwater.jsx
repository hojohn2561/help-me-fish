import React, { useState, useEffect } from "react";

import data from "../../api/data";
import "./assistant.scss";

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
        <div className="assistant-card"></div>
      </div>

      <div className="fish-data-container">
        <div className="fish-data-content">
          <h1 className="fish-data-header">What We Know So Far:</h1>
          <div className="fish-cards">
            {Object.keys(fishesData).map((key) => (
              <div className="fish-card" key={key}>
                <div className="fish-card-content">
                  <div className="fish-card-image"></div>
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
