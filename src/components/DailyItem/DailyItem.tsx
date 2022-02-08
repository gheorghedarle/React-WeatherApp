import React from "react";
import "./DailyItem.scss";

type DailyItemProps = {
  theme: string;
  onClick: () => void;
};

export const DailyItem = ({ theme, onClick }: DailyItemProps) => {
  const weatherCode = theme === "dark" ? "04d_n" : "04d";
  return (
    <div className="daily-item" onClick={onClick}>
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
