import React from "react";
import "./profile-card.css";
import UserIcon from "../../assets/user-icon.svg";
import PinIcon from "../../assets/pin-icon.svg";
import OfficeIcon from "../../assets/office-icon.svg";

const ProfileCard = ({
  name = "Maruti Narayan",
  title = "Project Manager",
  label = "Active",
  userId = "UserID : PDBT99",
  location = "JP Nagar, Bengaluru, KA, India",
  joined = "Joined in November 2023",
  profileImage,
  isLoading = false,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        {isLoading ? (
          <div className="shimmer-element shimmer-image" />
        ) : (
          <img
            src={profileImage || UserIcon}
            alt="Profile"
            className="profile-image"
          />
        )}
        <div className="profile-details">
          {isLoading ? (
            <>
              <div className="shimmer-element shimmer-name" />
              <div className="shimmer-element shimmer-title" />
            </>
          ) : (
            <>
              <div className="profile-name">{name}</div>
              <div className="profile-title">{title}</div>
            </>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="shimmer-element shimmer-label" />
      ) : (
        <div className="profile-label">
          <span className="label-text">{label}</span>
        </div>
      )}

      <div className="profile-meta">
        {[userId, location, joined].map((text, i) => (
          <div className="meta-row" key={i}>
            {isLoading ? (
              <>
                <div className="shimmer-element shimmer-icon" />
                <div className="shimmer-element shimmer-text" />
              </>
            ) : (
              <>
                <img
                  src={[UserIcon, PinIcon, OfficeIcon][i]}
                  alt="icon"
                  className="profile-card-icon"
                />
                <span className="meta-text">{text}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
