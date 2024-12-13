// src/pages/Home.js
import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import SearchBar from "../components/SearchBar";
import "../components/styles.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home-page">
      <h1>Profiles</h1>
      <div className="list">
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <div className="ProfileList">
      <ProfileList searchQuery={searchQuery} />
      </div>
      </div>
    </div>
  );
}

export default Home;
