import React from "react";
import "./CurrentWeather.scss";

export const CurrentWeather = () => {
  const weatherCode = "01d";
  return (
    <>
      <div className="current-weather">
        <img
          src={require(`../../resources/icon_${weatherCode}_n.png`)}
          className="current-weather-image"
          alt=""
        />
        <div>
          <div className="current-weather-temp">23°</div>
          <div className="current-weather-feelslike">Feels like: 27°</div>
          <div className="current-weather-description">sunny</div>
        </div>
      </div>
      <div className="current-weather-details"></div>
    </>
  );
};
