// src/components/Map.js
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function Map({ address }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const position = address.location; // Assume latitude and longitude are provided.

  return isLoaded ? (
    <GoogleMap center={position} zoom={15} mapContainerStyle={{ height: "400px", width: "100%" }}>
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
}

export default Map;
