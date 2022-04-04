import React, { useState } from "react";
import { CurrentWeatherModel, HourlyWeatherModel } from "../../models";
import HourlyItem from "../HourlyItem/HourlyItem";
import "./Hourly.scss";

type HourlyProps = {
  theme: string;
  unit: string;
  data: HourlyWeatherModel;
  clickHandler: (h: CurrentWeatherModel) => void;
};

export const Hourly = ({ theme, unit, data, clickHandler }: HourlyProps) => {
  const [activeIndex, setActiveIndex] = useState(
    data && data.hourly[0] ? data.hourly[0].dt : 0
  );

  const onClickHandler = (h: CurrentWeatherModel) => {
    setActiveIndex(h.dt);
    clickHandler(h);
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
              onClick={() => onClickHandler(h)}
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
