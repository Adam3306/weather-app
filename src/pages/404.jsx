import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div style={{ color: "rgb(146, 183, 204)", fontSize: "2rem" }}>
      There's no place like <Link to="/">home</Link>
    </div>
  );
}
