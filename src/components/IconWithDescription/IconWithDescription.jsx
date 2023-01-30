import React from "react";

import "./IconWithDescription.css";

const IconWithDescription = ({ icon, description }) => {
  return (
    <div className="iconWithDescription">
      <i
        className={icon}
        style={{ color: "rgb(56,147,177)", fontSize: "4rem" }}
      ></i>
      <p className="description">{description}</p>
    </div>
  );
};

export default IconWithDescription;
