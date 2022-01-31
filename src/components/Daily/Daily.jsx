import React from "react";
import DailyItem from "../DailyItem/DailyItem";
import "./Daily.scss";

export const Daily = ({ theme }) => {
  const dailyWeather = [...Array(6).keys()];
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {dailyWeather.map((h) => (
            <div className="hourly-item-container">
              <DailyItem theme={theme}></DailyItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;
