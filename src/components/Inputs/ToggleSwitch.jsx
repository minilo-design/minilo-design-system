import React, { useId } from 'react';
import './toggle-switch.css';

const ToggleSwitch = ({
  label = 'Enable setting',
  hint = 'Use toggle to turn this option on or off.',
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
}) => {
  const generatedId = useId();
  const inputId = `minilo-toggle-${generatedId}`;
  const hintId = `${inputId}-hint`;

  return (
    <div className="minilo-toggle-field">
      <label className="minilo-toggle-label-row" htmlFor={inputId}>
        <span className="minilo-toggle-label">{label}</span>
        <span className="minilo-toggle-control-wrap">
          <input
            id={inputId}
            type="checkbox"
            className="minilo-toggle-input"
            checked={checked}
            defaultChecked={checked === undefined ? defaultChecked : undefined}
            onChange={onChange}
            disabled={disabled}
            aria-describedby={hint ? hintId : undefined}
          />
          <span className="minilo-toggle-track" aria-hidden="true">
            <span className="minilo-toggle-thumb" />
          </span>
        </span>
      </label>

      {hint ? (
        <p className="minilo-toggle-hint" id={hintId}>
          {hint}
        </p>
      ) : null}
    </div>
  );
};

export default ToggleSwitch;
