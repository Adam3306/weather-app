import React from "react";
import { useSearchParams } from "react-router-dom";

import Weather from "../features/weather/Weather";

export default function City() {
  const [searchParams] = useSearchParams();

  return <Weather city={searchParams.get("name")} />;
}
