import React from "react";
import "./CurrentWeather.scss";

type CurrentWeatherProps = {
  theme: string;
  unit: string;
  data: any;
};

export const CurrentWeather = ({ theme, unit, data }: CurrentWeatherProps) => {
  const weatherCode = theme === "dark" ? "02d_n" : "02d";
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
            Feels like: <span>27°</span>
          </label>
          <label className="description">sunny</label>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
