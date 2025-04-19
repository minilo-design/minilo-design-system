import React from "react";
import "./card-large.css";

const CardLarge = ({
  title = "Candidate Profile",
  details = [],
  status = "Active",
  isLoading = false,
}) => {
  const Row = ({ label, value }) => (
    <div className="card-row">
      <span className="card-label">{label}</span>
      <span className="card-value">{value}</span>
    </div>
  );

  const ShimmerRow = (_, idx) => (
    <div className="card-row" key={idx}>
      <div className="shimmer-box shimmer-label" />
      <div className="shimmer-box shimmer-value" />
    </div>
  );

  return (
    <div className="card-large">
      <div className="card-header">
        {isLoading ? (
          <>
            <div className="shimmer-box shimmer-title" />
            <div className="shimmer-box shimmer-status" />
          </>
        ) : (
          <>
            <div className="card-title">{title}</div>
            <div className="card-status">{status}</div>
          </>
        )}
      </div>

      <div className="card-content">
        {isLoading
          ? Array.from({ length: 5 }).map(ShimmerRow)
          : details.map((item, idx) => <Row key={idx} {...item} />)}
      </div>

      <div className="card-footer">
        {isLoading ? (
          <>
            <div className="shimmer-box shimmer-button" />
            <div className="shimmer-box shimmer-button" />
          </>
        ) : (
          <>
            <button className="btn btn-outline">Secondary</button>
            <button className="btn btn-primary">Primary</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardLarge;
