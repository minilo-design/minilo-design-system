import React from 'react';
import './tile-button.css';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';

const TileButton = ({ image: Image, text, icon: Icon, loading, disabled, onClick }) => {
  return (
    <div
      className={`button-container ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={loading || disabled ? null : onClick}
    >
      <div className="button-inner">
        {/* Left Icon or Image */}
        <div className={`button-icon-left`}>
          {loading ? (
            <div className="icon-placeholder icon-placeholder-left"></div>
          ) : Icon ? (
            <Icon />
          ) : Image ? (
            <Image />
          ) : null}
        </div>

        {/* Button Text */}
        <span className={`button-text ${loading ? 'shimmer' : ''}`}>
        {loading ? '' : (text)}
        </span>

        {/* Right Arrow Icon */}
        <div className={`button-icon-right`}>
          {loading ? (
            <div className="icon-placeholder icon-placeholder-right"></div>
          ) : (
            <ArrowIcon />
          )}
        </div>
      </div>
    </div>
  );
};

export default TileButton;
