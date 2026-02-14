import React, { useId } from 'react';
import './textarea-field.css';

const TextAreaField = ({
  label = 'Description',
  value,
  defaultValue = '',
  onChange,
  placeholder = 'Type your content',
  helperText = 'Use clear and concise language.',
  error = '',
  disabled = false,
  required = false,
  rows = 4,
}) => {
  const generatedId = useId();
  const fieldId = `minilo-textarea-${generatedId}`;
  const hintId = `${fieldId}-hint`;
  const errorId = `${fieldId}-error`;

  const describedBy = error ? errorId : helperText ? hintId : undefined;

  return (
    <div className="minilo-textarea-field">
      <label className="minilo-textarea-label" htmlFor={fieldId}>
        {label}
        {required ? <span className="minilo-textarea-required">*</span> : null}
      </label>

      <textarea
        id={fieldId}
        className={`minilo-textarea-input ${error ? 'is-error' : ''}`}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />

      {error ? (
        <p className="minilo-textarea-error" id={errorId}>
          {error}
        </p>
      ) : helperText ? (
        <p className="minilo-textarea-helper" id={hintId}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default TextAreaField;
