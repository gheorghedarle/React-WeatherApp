import React from "react";
import "./Hourly.scss";

export const Hourly = ({ theme }) => {
  const hourlyWeather = [...Array(24).keys()];
  return (
    <>
      <div className="hourly">
        <label className="title">Hourly</label>
        <div className="hourly-items-container">
          {hourlyWeather.map((h) => (
            <div className="hourly-item"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hourly;
