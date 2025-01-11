import React from 'react';
import './tertiary-button.css';

const TertiaryButton = ({ text, onClick, disabled, icon: Icon }) => {
  return (
    <button 
      className={`tertiary-button ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {!disabled && Icon && <Icon className="tertiary-button-icon" />}
      <span className="tertiary-button-text">{text}</span>
    </button>
  );
};

export default TertiaryButton;
