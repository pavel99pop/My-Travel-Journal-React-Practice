import React from "react";
import LocationPin from "../images/location_pin.svg";

export default function Body(props) {
  return (
    <div className="container">
      <div>
        <img
          className="location-snapshot"
          src={props.imageUrl}
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
          <p className="location-details-country">{props.location}</p>
          <a className="location-map-link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <div className="location-details-text">
          <h1 className="location-details-text-title">{props.title}</h1>
          <p className="location-details-text-timeline">
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
