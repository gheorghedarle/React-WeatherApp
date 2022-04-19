import React, { useState } from "react";
import DailyItem from "../DailyItem/DailyItem";
import { DailyWeatherModel, SettingsModel } from "../../models";
import "./Daily.scss";
import { DailyItemDetails } from "../DailyItemDetails/DailyItemDetails";

type DailyProps = {
  settings: SettingsModel;
  data: DailyWeatherModel;
};

export const Daily = ({ settings, data }: DailyProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (d: any) => {
    if (d.dt === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(d.dt);
    }
  };
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {data.daily.map((d) => (
            <div key={d.dt}>
              <DailyItem
                settings={settings}
                data={d}
                onClick={() => clickHandler(d)}
              ></DailyItem>
              <div
                className={
                  activeIndex === d.dt
                    ? "daily-item-header active"
                    : "daily-item-header"
                }
              >
                <DailyItemDetails
                  settings={settings}
                  data={d}
                ></DailyItemDetails>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;
