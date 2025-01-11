import React from 'react';
import './secondary-button.css';

const SecondaryButton = ({ text, onClick, disabled, icon: Icon }) => {
  return (
    <button 
      className={`secondary-button ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {!disabled && Icon && <Icon className="secondary-button-icon" />}
      <span className="secondary-button-text">{text}</span>
    </button>
  );
};

export default SecondaryButton;
