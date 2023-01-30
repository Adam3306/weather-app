import React from "react";

import "./IconWithText.css";

export default function IconWithText({ icon, iconSize, text }) {
  return (
    <div className="iconWithTextContainer">
      <i
        className={icon}
        style={{ color: "rgb(1, 56, 118)", fontSize: iconSize }}
      ></i>
      <p className="text">{text}</p>
    </div>
  );
}
