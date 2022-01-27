import React from "react";
import "./Daily.scss";

export const Daily = ({ theme }) => {
  const dailyWeather = [...Array(6).keys()];
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {dailyWeather.map((h) => (
            <div className="daily-item"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;
