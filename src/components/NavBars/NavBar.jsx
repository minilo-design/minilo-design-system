import React from "react";
import "./navbar.css";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as Tab1Icon } from "../../assets/tab-1-icon.svg";
import { ReactComponent as Tab2Icon } from "../../assets/tab-2-icon.svg";
import { ReactComponent as Tab3Icon } from "../../assets/tab-3-icon.svg";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="nav-item">
          <HomeIcon className="nav-icon" />
          <span className="nav-label">Home</span>
        </div>
        <div className="nav-item">
          <Tab1Icon className="nav-icon" />
          <span className="nav-label">Tab1</span>
        </div>
        <div className="nav-item">
          <Tab2Icon className="nav-icon" />
          <span className="nav-label">Tab2</span>
        </div>
        <div className="nav-item">
          <Tab3Icon className="nav-icon" />
          <span className="nav-label">Tab3</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
