import React from "react";
import { CurrentWeatherModel } from "../../models";
import "./HourlyItem.scss";

type HourlyItemProps = {
  theme: string;
  data: CurrentWeatherModel;
};

export const HourlyItem = ({ theme, data }: HourlyItemProps) => {
  const weatherCode =
    theme === "dark" ? `${data.weather.icon}_n` : `${data.weather.icon}`;
  return (
    <div className={"hourly-item"}>
      <label className="hour">18:00</label>
      <img
        src={require(`../../resources/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="temp">{Math.round(data.temp)}°</label>
    </div>
  );
};
export default HourlyItem;
