import React from "react";
import "./item-card.css";
import { ReactComponent as AddIcon } from "../../assets/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";

const ItemCard = ({ loading = false }) => {
  return (
    <div className="item-card">
      <div className={`card-rect ${loading ? "shimmer-block" : ""}`} />
      <div className={`left-accent ${loading ? "shimmer-block" : ""}`} />
      <div className="coin-text">
        {loading ? <div className="text-shimmer shimmer-block" /> : "Item Name"}
      </div>
      <div className="desc-text-1">
        {loading ? (
          <div className="text-shimmer shimmer-block" />
        ) : (
          "From Date : 12 Jan 2024"
        )}
      </div>
      <div className="desc-text-2">
        {loading ? (
          <div className="text-shimmer shimmer-block" />
        ) : (
          "To Date : 15 Jan 2024"
        )}
      </div>
      <div className={`badge-bg ${loading ? "shimmer-block" : ""}`} />
      <div className="badge-text">
        {loading ? (
          <div className="text-shimmer shimmer-block small" />
        ) : (
          "03 days"
        )}
      </div>

      {/* Buttons */}
      {loading ? (
        <>
          <div className="card-button left-button shimmer-block" />
          <div className="card-button right-button shimmer-block" />
        </>
      ) : (
        <>
          <div className="card-button left-button">
            <AddIcon className="button-icon" />
            <span className="button-label blue-text">Edit</span>
          </div>
          <div className="card-button right-button">
            <DeleteIcon className="button-icon" />
            <span className="button-label red-text">Delete</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCard;
