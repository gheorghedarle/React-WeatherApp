import React from "react";
import { DailyWeatherDetailsModel } from "../../models/DailyWeatherDetailsModel";
import "./DailyItem.scss";

type DailyItemProps = {
  theme: string;
  unit: string;
  data: DailyWeatherDetailsModel;
  onClick: () => void;
};

export const DailyItem = ({ theme, unit, data, onClick }: DailyItemProps) => {
  const weatherCode =
    theme === "dark" ? `${data.weather.icon}_n` : `${data.weather.icon}`;
  const unitSymbol = unit === "metric" ? "C" : "F";
  return (
    <div className="daily-item" onClick={onClick}>
      <img
        src={require(`../../resources/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="day">
        {new Date(data.dt * 1000).toLocaleString("en-GB", {
          weekday: "long",
        })}
      </label>
      <label className="description">{data.weather.description}</label>
      <label className="min-max">
        {Math.round(data.minTemp)}°{unitSymbol} / {Math.round(data.maxTemp)}°
        {unitSymbol}
      </label>
    </div>
  );
};
export default DailyItem;
