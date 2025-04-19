import React from "react";
import "./secondary-button.css";
import "./shimmer.css";

const SecondaryButton = ({ text, onClick, disabled, icon: Icon, loading }) => {
  return (
    <button
      className={`secondary-button ${
        loading
          ? disabled
            ? "loading-disabled" // When loading and disabled are both true
            : "loading" // When only loading is true
          : disabled
          ? "disabled" // When only disabled is true
          : "" // When neither loading nor disabled is true
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="shimmer" />
      ) : (
        <>
          {!disabled && Icon && <Icon className="secondary-button-icon" />}
          <span className="secondary-button-text">{text}</span>
        </>
      )}
    </button>
  );
};

export default SecondaryButton;
