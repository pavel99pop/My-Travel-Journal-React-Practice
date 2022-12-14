import React from "react";
import LocationPin from "../images/location_pin.svg";

export default function Body() {
  return (
    <div className="container">
      <div>
        <img
          className="location-snapshot"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt="Snapshot"
        />
      </div>
      <div className="location-details">
        <div className="location-map">
          <img
            className="location-map-pin"
            src={LocationPin}
            alt="Location Pin"
          />
          <p className="location-details-country">Japan</p>
          <a
            className="location-map-link"
            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
          >
            View on Google Maps
          </a>
        </div>
        <div className="location-details-text">
          <h1 className="location-details-text-title">Mount Fuji</h1>
          <p className="location-details-text-timeline">
            12 Jan, 2021 - 24 Jan, 2021
          </p>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
}
