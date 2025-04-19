import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({
  title = "Accordion Title",
  children,
  loading = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!loading) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`accordion ${isOpen ? "open" : "collapsed"} ${
        loading ? "loading" : ""
      }`}
    >
      <button
        className="accordion-button"
        onClick={handleToggle}
        disabled={loading}
      >
        <span className="accordion-title">
          {loading ? <span className="shimmer shimmer-title" /> : title}
        </span>
        <span
          className={`accordion-icon ${isOpen ? "rotate" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && !loading && (
        <>
          <div className="accordion-divider"></div>
          <div className="accordion-content">{children}</div>
        </>
      )}
    </div>
  );
};

export default Accordion;
