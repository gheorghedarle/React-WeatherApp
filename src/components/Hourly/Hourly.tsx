import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  CurrentWeatherModel,
  HourlyWeatherModel,
  SettingsModel,
} from "../../models";
import HourlyItem from "../HourlyItem/HourlyItem";
import "./Hourly.scss";

type HourlyProps = {
  settings: SettingsModel;
  data: HourlyWeatherModel;
  clickHandler: (h: CurrentWeatherModel) => void;
};

export const Hourly = ({ settings, data, clickHandler }: HourlyProps) => {
  const [activeIndex, setActiveIndex] = useState(
    data && data.hourly[0] ? data.hourly[0].dt : 0
  );

  const onClickHandler = (h: CurrentWeatherModel) => {
    setActiveIndex(h.dt);
    clickHandler(h);
  };

  return (
    <div className="hourly">
      <label className="title">Hourly</label>
      <div className="hourly-items-container">
        <ScrollContainer>
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
              <HourlyItem settings={settings} data={h}></HourlyItem>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Hourly;
