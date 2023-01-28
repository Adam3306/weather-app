import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Weather from "../features/weather/WeatherComponent";

export default function City(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCity, setCurrentCity] = useState();

  useEffect(() => {
    const city = searchParams.get("name");
    setCurrentCity(city);
  }, [searchParams]);

  return (
    <div>
      <Link to="/">back</Link>
      {currentCity}
    </div>
  );
}
