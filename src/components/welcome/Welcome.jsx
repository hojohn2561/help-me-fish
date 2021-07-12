import React from "react";
import { Link } from "react-router-dom"; // Using react-router-dom to link to other content in the SPA

import "./welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
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
          <Link className="button" to="/freshwater">
            Freshwater
          </Link>
          <Link className="button" to="/saltwater">
            Saltwater
          </Link>
        </div>
      </div>
    </div>
  );
}
