import React from "react";
import "./container.css";

const Container = ({ isLoading = false }) => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="container-header">
        {isLoading ? (
          <div className="shimmer-box shimmer-label" />
        ) : (
          <span className="container-title">Title</span>
        )}
      </div>

      {/* Footer / Content Section */}
      <div className="container-footer">
        {isLoading ? (
          <div className="shimmer-box shimmer-footer" />
        ) : (
          <span className="container-text">Content goes here</span>
        )}
      </div>
    </div>
  );
};

export default Container;
