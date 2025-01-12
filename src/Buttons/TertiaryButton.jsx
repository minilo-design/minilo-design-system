import React from 'react';
import './tertiary-button.css';
import './shimmer.css';

const TertiaryButton = ({ text, onClick, disabled, icon: Icon, loading }) => {
  return (
    <button 
      className={`tertiary-button ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      disabled={disabled || loading}
    >
      { loading ? (
        <span className='shimmer'/>
      )
    : (
      <>
          {!disabled && Icon && <Icon className="tertiary-button-icon" />}
          <span className="tertiary-button-text">{text}</span>
      </>
    )} 
    </button>
  );
};

export default TertiaryButton;
