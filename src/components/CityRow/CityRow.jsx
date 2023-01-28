import React from "react";

import "./CityRow.css";

export default function CityRow({ name, onClick }) {
  return (
    <div className="row" onClick={onClick}>
      {name}
    </div>
  );
}
