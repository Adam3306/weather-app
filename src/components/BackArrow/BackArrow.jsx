import React from "react";
import { Link } from "react-router-dom";

import "./BackArrow.css";

export default function BackArrow({ to }) {
  return (
    <div className="container">
      <Link to={to} className="backArrow">
        {"<"}
      </Link>
    </div>
  );
}
