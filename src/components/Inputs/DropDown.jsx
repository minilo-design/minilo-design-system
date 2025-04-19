import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down.svg";

const DropDown = ({
  label = "Label",
  placeholder = "Select option",
  options = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-label-container">
        <span className="dropdown-label">{label}</span>
      </div>

      <div className="dropdown-input-wrapper" onClick={toggleDropdown}>
        <div className="dropdown-border" />
        <div className="dropdown-placeholder">
          {selected ? selected.label : placeholder}
        </div>
        <ArrowDownIcon className="dropdown-arrow" />
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
