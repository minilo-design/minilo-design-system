import React from 'react';
import './primary-button.css';
import './shimmer.css';

const PrimaryButton = ({ text, onClick, disabled ,loading}) => {
  return (
    <button 
      className={`primary-button ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`} 
      onClick={onClick} 
      disabled={disabled || loading}
    >
      { loading ? (
        <span className='shimmer'/>
       ) : (
        <span className='primary-button-text'> {text} </span>  
      )} 
    </button>
  );
};

export default PrimaryButton;
