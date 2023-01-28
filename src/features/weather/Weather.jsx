import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

import { useGetWeatherQuery } from "./weatherSlice";
export default function Weather({ city }) {
  const { data, isLoading, isSuccess, isError, error } =
    useGetWeatherQuery(city);
  console.log("error\t", error);
  if (isLoading) {
    // TODO: move to the middle
    return <CircleLoader color="#36d7b7" />;
  }

  if (isError || error) {
    return (
      <div>
        Something went wrong
        <p>Code: {error.status}</p>
        <p>Message: {error.data.message}</p>
      </div>
    );
  }

  if (isSuccess) {
    const {
      main: { temp },
      sys: { sunrise, sunset },
    } = data;
    console.log(new Date(sunrise * 1000).getHours());
    console.log(new Date(sunset * 1000).getMinutes());
    return (
      <div>
        <p>{city}</p>
        <p>{temp}C</p>
        <p>
          {new Date(sunrise * 1000).getHours()}:
          {new Date(sunrise * 1000).getMinutes()}
        </p>
        <p>
          {new Date(sunset * 1000).getHours()}:
          {new Date(sunset * 1000).getMinutes()}
        </p>
      </div>
    );
  }
}
