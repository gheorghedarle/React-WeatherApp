import React from "react";
import "./HourlyItem.scss";

export const HourlyItem = ({ theme }) => {
  const weatherCode = theme === "dark" ? "03d_n" : "03d";
  return (
    <div className="hourly-item">
      <label className="hour">18:00</label>
      <img
        src={require(`../../resources/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="temp">
        24°<span>C</span>
      </label>
    </div>
  );
};
export default HourlyItem;
