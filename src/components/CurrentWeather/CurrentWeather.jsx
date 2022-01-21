import React from "react";
import "./CurrentWeather.scss";

export const CurrentWeather = ({ theme }) => {
  const weatherCode = theme === "dark" ? "02d_n" : "02d";
  return (
    <div className="current-weather-container">
      <div className="current-weather">
        <div className="image">
          <img
            src={require(`../../resources/icon_${weatherCode}.png`)}
            className="icon"
            alt=""
          />
        </div>
        <div className="details">
          <div className="temp">
            23°<span>C</span>
          </div>
          <div className="feelslike">
            Feels like: <span>27°</span>
          </div>
          <div className="description">sunny</div>
        </div>
      </div>
      <div className="current-weather-details"></div>
    </div>
  );
};

export default CurrentWeather;
