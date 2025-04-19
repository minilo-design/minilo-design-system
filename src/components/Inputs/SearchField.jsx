import React, { useState } from "react";
import "./search-field.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as MicIcon } from "../../assets/mic-icon.svg";
import { ReactComponent as ClearIcon } from "../../assets/clear-icon.svg"; // <- new

const SearchField = ({ placeholder = "Search..." }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="search-field-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <div className="clear-icon-wrapper" onClick={handleClear}>
          <ClearIcon className="clear-icon" />
        </div>
      )}
      <div className="search-icon-wrapper">
        <SearchIcon className="search-icon" />
      </div>
      <div className="mic-icon-wrapper">
        <MicIcon className="mic-icon" />
      </div>
    </div>
  );
};

export default SearchField;
