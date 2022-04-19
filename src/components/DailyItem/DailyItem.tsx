import React from "react";
import { SettingsModel } from "../../models";
import { DailyWeatherDetailsModel } from "../../models/DailyWeatherDetailsModel";
import "./DailyItem.scss";

type DailyItemProps = {
  settings: SettingsModel;
  data: DailyWeatherDetailsModel;
  onClick: () => void;
};

export const DailyItem = ({ settings, data, onClick }: DailyItemProps) => {
  const weatherCode =
    settings.theme === "dark"
      ? `${data.weather.icon}_n`
      : `${data.weather.icon}`;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
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
