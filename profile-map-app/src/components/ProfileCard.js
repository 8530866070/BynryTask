// src/components/ProfileCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileCard({ profile }) {
  const navigate = useNavigate();

  const showMap = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={`${profile.name}`} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={showMap}>Summary</button>
    </div>
  );
}

export default ProfileCard;
