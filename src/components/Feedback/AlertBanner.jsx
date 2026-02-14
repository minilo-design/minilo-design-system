import React from 'react';
import './alert-banner.css';

const VALID_VARIANTS = ['info', 'success', 'warning', 'error'];

const AlertBanner = ({
  title = 'System notice',
  message = 'Your system message appears here.',
  variant = 'info',
  dismissible = false,
  onDismiss,
}) => {
  const safeVariant = VALID_VARIANTS.includes(variant) ? variant : 'info';

  return (
    <div className={`alert-banner alert-banner-${safeVariant}`} role="alert" aria-live="polite">
      <div className="alert-banner-dot" aria-hidden="true" />

      <div className="alert-banner-content">
        <h4 className="alert-banner-title">{title}</h4>
        <p className="alert-banner-message">{message}</p>
      </div>

      {dismissible ? (
        <button type="button" className="alert-banner-close" onClick={onDismiss} aria-label="Dismiss alert">
          Dismiss
        </button>
      ) : null}
    </div>
  );
};

export default AlertBanner;
