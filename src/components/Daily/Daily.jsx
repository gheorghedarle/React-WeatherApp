import React, { useState } from "react";
import DailyItem from "../DailyItem/DailyItem";
import "./Daily.scss";

export const Daily = ({ theme }) => {
  const dailyWeather = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (h) => {
    if (h.id === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(h.id);
    }
  };
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {dailyWeather.map((h) => (
            <>
              <DailyItem
                theme={theme}
                onClick={() => clickHandler(h)}
              ></DailyItem>
              <div
                className={
                  activeIndex === h.id
                    ? "daily-item-details active"
                    : "daily-item-details"
                }
              >
                Hidden gems
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;
