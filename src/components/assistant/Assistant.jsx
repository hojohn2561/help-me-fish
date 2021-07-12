import React from "react";

import "./assistant.scss";

export default function Assistant({ fishes }) {
  return (
    <div className="assistant-card">
      <h1>Do you have a target species in mind?</h1>
      <div className="options-container">
        <div className="button yes-no-button">Yes</div>
        <div className="button yes-no-button">No</div>
      </div>
    </div>
  );
}
