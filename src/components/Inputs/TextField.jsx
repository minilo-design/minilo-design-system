import React from "react";
import "./textfield.css";

const TextField = ({
  type = "text", // "text" | "date"
  label = "Label",
  value = "",
  placeholder = "",
  onChange,
  disabled = false,
}) => {
  return (
    <div className="textfield-container">
      <div className="textfield-label-container">
        <span className={`textfield-label ${disabled ? "disabled" : ""}`}>
          {label}
        </span>
        {/* Optional error dot */}
        {/* <span className="textfield-dot" /> */}
      </div>

      <div className="textfield-border">
        <input
          className={`textfield-input ${disabled ? "disabled" : ""}`}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TextField;
