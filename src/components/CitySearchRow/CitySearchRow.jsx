import React from "react";

import "./CitySearchRow.css";

export default function CitySearchRow(props) {
  const { name, highlight, selected } = props;

  if (!highlight.trim()) {
    return <div>{name}</div>;
  }
  const escapeRegExp = (str = "") =>
    str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

  const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");

  const parts = name.split(regex);

  if (selected) {
    return (
      <div className="cityName" {...props}>
        <span className="match">{name}</span>
      </div>
    );
  }
  return (
    <div className="cityName" {...props}>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <span className="match" key={i}>
              {part}
            </span>
          ) : (
            <span className="rest" key={i}>
              {part}
            </span>
          )
        )}
    </div>
  );
}
