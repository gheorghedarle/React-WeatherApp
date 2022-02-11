import React, { useState } from "react";
import { HourlyWeatherModel } from "../../models";
import HourlyItem from "../HourlyItem/HourlyItem";
import "./Hourly.scss";

type HourlyProps = {
  theme: string;
  unit: string;
  data: HourlyWeatherModel;
};

export const Hourly = ({ theme, unit, data }: HourlyProps) => {
  const [activeIndex, setActiveIndex] = useState(
    data && data.hourly ? data.hourly[0].dt : 0
  );

  const clickHandler = (h: any) => {
    setActiveIndex(h.dt);
  };

  return (
    <>
      <div className="hourly">
        <label className="title">Hourly</label>
        <div className="hourly-items-container">
          {data.hourly.map((h) => (
            <div
              key={h.dt}
              className={
                activeIndex === h.dt
                  ? "hourly-item-container active"
                  : "hourly-item-container"
              }
              onClick={() => clickHandler(h)}
            >
              <HourlyItem theme={theme} unit={unit} data={h}></HourlyItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hourly;
