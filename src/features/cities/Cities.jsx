import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CityRow } from "../../components";

import "./cities.css";

export default function Cities() {
  const cities = useSelector((state) => state.cities.savedCapitals);
  const navigate = useNavigate();

  const navigateToCityPage = (city) => {
    navigate("/city", {
      state: { city },
    });

    navigate({
      pathname: "/city",
      search: `?name=${city}`,
    });
  };

  return (
    <div className="background">
      {cities.map((city, i) => (
        <CityRow
          key={city + i}
          name={city}
          onClick={() => {
            navigateToCityPage(city);
          }}
        />
      ))}
      <button className="plusButton" onClick={() => navigate("/search")}>
        +
      </button>
    </div>
  );
}
