import React, { useEffect } from "react";
import Weather from "../features/weather/WeatherComponent";

import { getCapitalByCurrentLocation } from "../utils";

export default function City() {
  useEffect(async () => {
    // TODO: Move this to redux
    const capital = await getCapitalByCurrentLocation();
    console.log("capital\t", capital);
  }, []);

  return (
    <div>
      <Weather></Weather>
    </div>
  );
}
