import React from "react";
import { CurrentWeatherModel } from "../../models";
import "./CurrentWeather.scss";

type CurrentWeatherProps = {
  theme: string;
  unit: string;
  data: CurrentWeatherModel;
};

export const CurrentWeather = ({ theme, unit, data }: CurrentWeatherProps) => {
  const weatherCode =
    data && theme === "dark"
      ? `${data.weather.icon}_n`
      : `${data.weather.icon}`;
  const unitSymbol = unit === "metric" ? "C" : "F";
  return (
    <>
      <div className="current-weather">
        <div className="image">
          <img
            src={require(`../../resources/icon_${weatherCode}.png`)}
            className="icon"
            alt=""
          />
        </div>
        <div className="details">
          <label className="temp">
            {Math.round(data.temp)}°<span>{unitSymbol}</span>
          </label>
          <label className="feelslike">
            Feels like: <span>{Math.round(data.feels_like)}°</span>
          </label>
          <label className="description">{data.weather.description}</label>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
