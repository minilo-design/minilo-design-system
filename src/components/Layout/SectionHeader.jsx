import React from 'react';
import './section-header.css';

const SectionHeader = ({
  eyebrow = 'Section',
  title = 'Minilo section title',
  description = 'Use this header to introduce content blocks with consistent hierarchy.',
  actionText,
  onAction,
}) => {
  return (
    <div className="minilo-section-header">
      <div className="minilo-section-header-copy">
        <p className="minilo-section-eyebrow">{eyebrow}</p>
        <h2 className="minilo-section-title">{title}</h2>
        <p className="minilo-section-description">{description}</p>
      </div>

      {actionText ? (
        <button type="button" className="minilo-section-action" onClick={onAction}>
          {actionText}
        </button>
      ) : null}
    </div>
  );
};

export default SectionHeader;
