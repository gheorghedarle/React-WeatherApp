import React, { useState } from "react";
import HourlyItem from "../HourlyItem/HourlyItem";
import "./Hourly.scss";

type HourlyProps = {
  theme: string;
};

export const Hourly = ({ theme }: HourlyProps) => {
  const hourlyWeather = [
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
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(
    hourlyWeather ? hourlyWeather[0].id : 0
  );

  const clickHandler = (h: any) => {
    setActiveIndex(h.id);
  };

  return (
    <>
      <div className="hourly">
        <label className="title">Hourly</label>
        <div className="hourly-items-container">
          {hourlyWeather.map((h) => (
            <div
              key={h.id}
              className={
                activeIndex === h.id
                  ? "hourly-item-container active"
                  : "hourly-item-container"
              }
              onClick={() => clickHandler(h)}
            >
              <HourlyItem theme={theme}></HourlyItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hourly;
