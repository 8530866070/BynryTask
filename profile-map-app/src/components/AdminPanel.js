// src/components/AdminPanel.js
import React, { useState } from "react";
import profilesData from "../profilesData";

function AdminPanel() {
  const [profiles, setProfiles] = useState(profilesData);

  const handleAddProfile = () => {
    // Logic to add a profile
  };

  const handleEditProfile = (id) => {
    // Logic to edit a profile
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleAddProfile}>Add Profile</button>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h2>{profile.name}</h2>
          <button onClick={() => handleEditProfile(profile.id)}>Edit</button>
          <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
