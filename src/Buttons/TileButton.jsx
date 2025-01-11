import React from 'react';
import './tile-button.css';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';

const Button = ({ image: Image, text, icon: Icon, onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <div className="button-inner">
        {/* Left Icon */}
        <div className="button-icon-left">
          {Icon ? <Icon /> : Image ? <Image /> : null}
        </div>
        
        {/* Button Text */}
        <span className="button-text">{text}</span>
        
        {/* Right Arrow Icon */}
        <div className="button-icon-right">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default Button;
