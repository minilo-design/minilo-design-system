import React from 'react';
import './stat-card.css';

const TREND_LABELS = {
  up: 'Upward trend',
  down: 'Downward trend',
  flat: 'No change',
};

const StatCard = ({
  label = 'Weekly active users',
  value = '12,840',
  helper = '+8.4% from previous week',
  trend = 'up',
  loading = false,
}) => {
  const safeTrend = TREND_LABELS[trend] ? trend : 'flat';

  if (loading) {
    return (
      <div className="minilo-stat-card" aria-label="Loading statistic">
        <div className="minilo-stat-shimmer minilo-stat-shimmer-label" />
        <div className="minilo-stat-shimmer minilo-stat-shimmer-value" />
        <div className="minilo-stat-shimmer minilo-stat-shimmer-helper" />
      </div>
    );
  }

  return (
    <div className={`minilo-stat-card minilo-stat-${safeTrend}`}>
      <p className="minilo-stat-label">{label}</p>
      <p className="minilo-stat-value">{value}</p>
      <p className="minilo-stat-helper" aria-label={TREND_LABELS[safeTrend]}>
        {helper}
      </p>
    </div>
  );
};

export default StatCard;
