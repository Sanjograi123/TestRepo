import React from "react";

import "./buttonwithicon.css";
const ButtonWithIcon = ({ icon }) => {
  return (
    <div className="btn-container">
      <div className="btn-mainContianer">
        <button className="btn-search">{icon}</button>
      </div>
    </div>
  );
};

export default ButtonWithIcon;