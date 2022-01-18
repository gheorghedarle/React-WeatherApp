import React from "react";
import "./CurrentWeather.scss";

export const CurrentWeather = () => {
  const weatherCode = "01d";
  return (
    <div className="container">
      <div className="current-weather">
        <div className="image">
          <img
            src={require(`../../resources/icon_${weatherCode}_n.png`)}
            className="icon"
            alt=""
          />
        </div>
        <div className="details">
          <div className="temp">23°</div>
          <div className="feelslike">Feels like: 27°</div>
          <div className="description">sunny</div>
        </div>
      </div>
      <div className="current-weather-details"></div>
    </div>
  );
};
