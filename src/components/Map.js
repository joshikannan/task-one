import React from "react";
import map_img from "../assets/map.png";
import "./Map.css";

const Map = () => {
  const green = {
    color: "green",
  };
  return (
    <div className="map-section">
      <div className="map-text">
        <h2 style={green}>Our Global Presence –</h2>
        <h4>Connecting Continents, Empowering Businesses</h4>
        <h4 style={{ textAlign: "center", paddingTop: "10px" }}>
          Sales And <span style={green}>Service Network</span>
        </h4>
        <p style={{ textAlign: "center", paddingTop: "10px" }}>
          At Five Fingers Exports, We work on three principles – Quality,
          Commitment, and Services. Customer’s satisfaction is always our prime
          priority. More than 2000+ happy customers across PAN India and globe.
        </p>
      </div>
      <div className="map-image">
        <img src={map_img} />
      </div>
    </div>
  );
};

export default Map;
