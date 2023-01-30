import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

import { useGetWeatherQuery } from "./weatherSlice";
import { Clock, BackArrow } from "../../components";

import { timeStampToHourMinute } from "../../utils";

import "./Weather.css";

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
      weather,
    } = data;

    console.log("weather\t", data);
    const { description, main } = weather[0];
    const icon = `wi wi-${main.toLowerCase()}`;
    console.log(icon);
    return (
      <div className="container">
        <BackArrow />
        <Clock />
        <p className="cityname">{city}</p>
        <i
          className={icon}
          style={{ color: "rgb(56,147,177)", fontSize: "4rem" }}
        ></i>
        <p className="temp">{description}</p>
        <div
          style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        >
          <i
            className="wi wi-thermometer"
            style={{ color: "rgb(1, 56, 118)", fontSize: "2rem" }}
          ></i>
          <p className="temp">{temp} °C</p>
        </div>
        <div
          style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        >
          <i
            className="wi wi-sunrise"
            style={{ color: "rgb(1, 56, 118)", fontSize: "2rem" }}
          ></i>
          <p className="temp">{timeStampToHourMinute(sunrise)}</p>
        </div>
        <div
          style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        >
          <i
            className="wi wi-sunset"
            style={{ color: "rgb(1, 56, 118)", fontSize: "2rem" }}
          ></i>
          <p className="temp">{timeStampToHourMinute(sunset)}</p>
        </div>
      </div>
    );
  }
}
