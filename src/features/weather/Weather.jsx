import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

import { useGetWeatherQuery } from "./weatherSlice";
import { Clock } from "../../components";
import { timeStampToHourMinute } from "../../utils";

export default function Weather({ city }) {
  const { data, isLoading, isSuccess, isError, error } =
    useGetWeatherQuery(city);

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

    return (
      <div>
        <Clock />
        <p>{city}</p>
        <p>{temp}C</p>
        <p>{timeStampToHourMinute(sunrise)}</p>
        <p>{timeStampToHourMinute(sunset)}</p>
      </div>
    );
  }
}
