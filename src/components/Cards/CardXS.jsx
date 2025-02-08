import React from 'react';
import './card-xs.css';

const CardXS = ({ title, subtitle, loading, onClick }) => {
  return (
    <div className={`card-xs-container ${loading ? 'loading' : ''}`} onClick={onClick}>
      <div className="card-xs-image">
        {loading ? (
          <div className="shimmer"></div>
        ) : ''}
      </div>

      <div className="card-xs-content">
        <div className={`card-xs-title ${loading ? 'shimmer' : ''}`}>
          {loading ? '' : title}
        </div>

        <div className={`card-xs-description ${loading ? 'shimmer' : ''}`}>
          {loading ? '' : subtitle}
        </div>
      </div>

      <div className="card-xs-button">
      <div className={`card-xs-time-ago ${loading ? 'shimmer' : ''}`}>
          {loading ? '' : '10 hours ago'}
        </div>
        <div className={`card-xs-see-now ${loading ? 'shimmer' : ''}`}>
          {loading ? '' : 'See Now'}
        </div>
      </div>
    </div>
  );
};

export default CardXS;
