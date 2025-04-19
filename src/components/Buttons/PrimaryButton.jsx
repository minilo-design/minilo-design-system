import React from "react";
import "./primary-button.css";
import "./shimmer.css";

const PrimaryButton = ({ text, onClick, disabled, loading }) => {
  return (
    <button
      className={`primary-button ${
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
        <span className="primary-button-text"> {text} </span>
      )}
    </button>
  );
};

export default PrimaryButton;
