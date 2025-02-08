import React from 'react';
import './card-small.css';

const CardSmall = ({ headline, text, loading, onClick, icon: Icon }) => {
  return (
    <div className={`card-small-container ${loading ? 'loading' : ''}`}>
      <div className="card-small-inner">
        {/* Icon */}
        <div className={`card-small-icon ${loading ? 'shimmer' : ''}`}>
          {loading ? <div className="icon-placeholder"></div> : Icon && <Icon />}
        </div>

        {/* Headline */}
        <h3 className={`card-small-headline ${loading ? 'shimmer' : ''}`}>
          {loading ? '' : headline}
        </h3>

        {/* Supporting Text */}
        <p className={`card-small-text ${loading ? 'shimmer' : ''}`}>
          {loading ? '' : text}
        </p>

        {/* Apply Now Button */}
        <button
          className={`card-small-apply ${loading ? 'shimmer' : ''}`}
          onClick={loading ? null : onClick}
          disabled={loading}
        >
          {loading ? '' : 'Apply Now'}
        </button>
      </div>
    </div>
  );
};

export default CardSmall;
