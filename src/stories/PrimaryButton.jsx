import React from 'react';
import './primary-button.css';

const PrimaryButton = ({ text, onClick, disabled }) => {
  return (
    <button 
      className={`primary-button ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
