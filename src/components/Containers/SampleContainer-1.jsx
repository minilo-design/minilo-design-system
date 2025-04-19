import React from "react";
import "./sample-container-1.css";

const ShimmerLine = ({ width }) => (
  <div className="shimmer-line" style={{ width }} />
);

const InfoRow = ({ label, value }) => (
  <div className="info-row">
    <div className="label">{label}</div>
    <div className="value">{value}</div>
  </div>
);

export default function SampleContainer1({ isLoading = true }) {
  return (
    <div className="sample-container">
      <div className="title">
        {isLoading ? <ShimmerLine width="55px" /> : "Details"}
      </div>

      {isLoading ? (
        <>
          <div className="input shimmer-box" />
          <div className="input shimmer-box" />

          <div className="info-card">
            <div className="info-row">
              <ShimmerLine width="100%" />
            </div>
            <div className="info-row">
              <ShimmerLine width="100%" />
            </div>
            <div className="info-row">
              <ShimmerLine width="100%" />
            </div>
          </div>
        </>
      ) : (
        <>
          <input className="input" placeholder="Sample Input 1" />
          <input className="input" placeholder="Sample Input 2" />

          <div className="info-card">
            <InfoRow label="Lorem Ipsum" value="Lorem Ipsum" />
            <InfoRow label="ELorem Ipsum" value="Lorem Ipsum" />
            <InfoRow label="Lorem Ipsum" value="Lorem Ipsum" />
            <InfoRow label="Lorem Ipsum" value="Lorem Ipsum" />
          </div>
        </>
      )}
    </div>
  );
}
