import React from "react";
import "./DailyItem.scss";

export const DailyItem = ({ theme }) => {
  const weatherCode = theme === "dark" ? "04d_n" : "04d";
  return (
    <div className="daily-item">
      <img
        src={require(`../../resources/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="day">Tommorow</label>
      <label className="min-max">15°/16°</label>
    </div>
  );
};
export default DailyItem;
