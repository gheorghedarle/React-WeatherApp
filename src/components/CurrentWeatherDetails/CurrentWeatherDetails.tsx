import React from "react";
import "./CurrentWeatherDetails.scss";

type CurrentWeatherProps = {
  data: any;
};

export const CurrentWeatherDetails = ({ data }: CurrentWeatherProps) => {
  return <div className="current-weather-details"></div>;
};

export default CurrentWeatherDetails;
