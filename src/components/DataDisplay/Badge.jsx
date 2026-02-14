import React from 'react';
import './badge.css';

const TONES = ['neutral', 'info', 'success', 'warning', 'error'];
const SIZES = ['sm', 'md'];

const Badge = ({ label = 'Label', tone = 'neutral', size = 'md', filled = false }) => {
  const safeTone = TONES.includes(tone) ? tone : 'neutral';
  const safeSize = SIZES.includes(size) ? size : 'md';

  return (
    <span className={`minilo-badge minilo-badge-${safeTone} minilo-badge-${safeSize} ${filled ? 'is-filled' : ''}`}>
      {label}
    </span>
  );
};

export default Badge;
