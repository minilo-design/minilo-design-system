import React from 'react';
import './secondary-button.css';
import './shimmer.css';

const SecondaryButton = ({ text, onClick, disabled, icon: Icon, loading }) => {
  return (
    <button 
      className={`secondary-button ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      disabled={disabled || loading}
    >
      { loading ? (
        <span className='shimmer'/>
       ) : (
       <>
        {!disabled && Icon && <Icon className="secondary-button-icon" />}
        <span className="secondary-button-text">{text}</span>
        </> 
       )}
    </button>
  );
};

export default SecondaryButton;
