import React from "react";
import HashLoader from "react-spinners/HashLoader";

import { useGetWeatherQuery } from "./weatherSlice";
import {
  Clock,
  BackArrow,
  IconWithText,
  IconWithDescription,
  CityTitle,
} from "../../components";

import { timeStampToHourMinute } from "../../utils";

import "./Weather.css";

export default function Weather({ city }) {
  const { data, isLoading, isSuccess, isError, error } =
    useGetWeatherQuery(city);

  if (isLoading) {
    return (
      <div style={{ height: "100%" }}>
        <HashLoader className="spinner" color="rgb(146, 183, 204)" />
      </div>
    );
  }

  if (isError || error) {
    return (
      <div className="description">
        Something went wrong
        <p>Code: {error.status}</p>
        <p>Message: {error?.message}</p>
      </div>
    );
  }

  if (isSuccess) {
    const {
      main: { temp },
      sys: { sunrise, sunset },
      weather,
      timezone,
    } = data;

    const { description, main } = weather[0];

    const date = new Date();
    date.setSeconds(date.getSeconds() + timezone);

    // TODO: fix icon mapping
    const icon = `wi wi-${main.toLowerCase()}`;

    return (
      <div className="container">
        <BackArrow to={"/"} />
        <Clock timezone={timezone} />
        <CityTitle title={city} />
        <IconWithDescription icon={icon} description={description} />
        <div className="dataContainer">
          <IconWithText
            icon={"wi wi-thermometer"}
            text={`${Math.round(temp)} °C`}
            iconSize={"2rem"}
          />
          <IconWithText
            icon={"wi wi-sunrise"}
            text={timeStampToHourMinute(sunrise + timezone)}
            iconSize={"1.5rem"}
          />
          <IconWithText
            icon={"wi wi-sunset"}
            text={timeStampToHourMinute(sunset + timezone)}
            iconSize={"1.5rem"}
          />
        </div>
      </div>
    );
  }
}
