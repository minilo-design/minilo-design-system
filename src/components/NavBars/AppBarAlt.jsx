import React from "react";
import "./appbar-alt.css";
import { ReactComponent as BackIcon } from "../../assets/back-icon.svg";

const AppBarAlt = ({ title = "Title" }) => {
  return (
    <div className="appbar-alt">
      {/* Status Bar */}
      <div className="status-bar-alt">
        <div className="time">9:41</div>
        <div className="right-icons">
          <div className="signal" />
          <div className="wifi" />
          <div className="battery">
            <div className="battery-inner" />
            <div className="battery-cap" />
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="top-navigation">
        <div className="nav-left">
          <BackIcon className="back-icon" />
          <div className="nav-title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default AppBarAlt;
