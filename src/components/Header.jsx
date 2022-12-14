import React from "react";
import WorldIcon from "../images/world.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="header-icon" src={WorldIcon} alt="World Icon" />
      <h2>my travel journal</h2>
    </div>
  );
}
