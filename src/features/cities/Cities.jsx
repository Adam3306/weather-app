import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CityRow } from "../../components";
import { getCapitalByCurrentLocation } from "../../utils";
import { addCity } from "./citiesSlice";

import "./cities.css";

export default function Cities() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.savedCapitals);
  const navigate = useNavigate();

  const setCapital = useCallback(async () => {
    // TODO: move this away
    const capital = await getCapitalByCurrentLocation();
    dispatch(addCity(capital));
  }, [dispatch]);

  useEffect(() => {
    setCapital();
  }, []);

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
      {cities.map((city) => (
        <CityRow
          key={city}
          name={city}
          onClick={() => {
            navigateToCityPage(city);
          }}
        />
      ))}
      <button className="plusButton">+</button>
    </div>
  );
}
