import React from "react";
import { useGetWeatherQuery } from "./weatherSlice";
export default function Weather() {
  // const {
  //   data: weather,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetWeatherQuery();
  const resp = useGetWeatherQuery("Boldva");
  console.log("resp\t", resp);
  return <div>Weather</div>;
}
