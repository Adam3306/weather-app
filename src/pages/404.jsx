import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      There's no place like <Link to="/">home</Link>
    </div>
  );
}
