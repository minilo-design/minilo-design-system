import React from "react";
import "./appbar.css";
import { ReactComponent as NotificationIcon } from "../../assets/alert-icon.svg";
import { ReactComponent as LangIcon } from "../../assets/lang-icon.svg";
import logo from "../../assets/Logo.svg";

const AppBar = () => {
  return (
    <div className="appbar">
      {/* Status Bar */}
      <div className="status-bar">
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

      {/* Top Bar */}
      <div className="top-bar">
        <div className="appbar-left">
          <img src={logo} alt="logo" className="logo" />
          <div className="profile-label">Profile</div>
        </div>
        <div className="appbar-right">
          <div className="icon-wrapper">
            <LangIcon className="notification-icon" />
          </div>
          <div className="icon-wrapper notification">
            <NotificationIcon className="notification-icon" />
            <div className="notification-badge">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
