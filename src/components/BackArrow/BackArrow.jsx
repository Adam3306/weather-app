import React from "react";
import { Link } from "react-router-dom";

import "./BackArrow.css";

export default function BackArrow() {
  return (
    <div className="container">
      <Link to="/" className="backArrow">
        {"<"}
      </Link>
    </div>
  );
}