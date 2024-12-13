// src/pages/ProfileDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import profilesData from "../profilesData";
import Map from "../components/Map";

function ProfileDetails() {
  const { id } = useParams();
  const profile = profilesData.find((p) => p.id.toString() === id);

  if (!profile) {
    return <p>Profile not found!</p>;
  }

  return (
    <div className="profile-details">
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      <Map address={profile.address} />
    </div>
  );
}

export default ProfileDetails;
