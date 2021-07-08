import React from "react";

import "./welcome.scss";

export default function Welcome() {
  return (
    <div className="content">
      <div className="welcome-container">
        <div className="welcome-header">WELCOME</div>
        <div className="welcome-text">
          <p>
            Going fishing but not sure what fish to target, or what bait or lure
            to use?
          </p>
          <p>Well, you've come to the right place!</p>
        </div>
        <div className="getting-started">
          <p>
            For new and avid fishermen alike, we hope you learn something new
            while visiting our site.
          </p>
          <p>
            To get started, select whether you'll be going freshwater or
            saltwater fishing.
          </p>
        </div>

        <div className="water-buttons-container">
          <div
            className="button"
            onClick={() => console.log("load Freshwater content")}
          >
            Freshwater
          </div>
          <div
            className="button"
            onClick={() => console.log("load Saltwater content")}
          >
            Saltwater
          </div>
        </div>
      </div>
    </div>
  );
}
