// src/components/ProfileList.js
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import profilesData from "../profilesData";

function ProfileList({ searchQuery }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Simulate API call
    setProfiles(
      profilesData.filter((profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileList;
