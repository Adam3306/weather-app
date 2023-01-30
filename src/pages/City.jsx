import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Weather from "../features/weather/Weather";

export default function City(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCity, setCurrentCity] = useState();

  useEffect(() => {
    const city = searchParams.get("name");
    setCurrentCity(city);
  }, [searchParams]);

  return (
    <div>
      <Weather city={currentCity} />
    </div>
  );
}
