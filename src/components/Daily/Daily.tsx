import React, { useState } from "react";
import DailyItem from "../DailyItem/DailyItem";
import { DailyWeatherModel } from "../../models";
import "./Daily.scss";
import { DailyItemDetails } from "../DailyItemDetails/DailyItemDetails";

type DailyProps = {
  theme: string;
  unit: string;
  data: DailyWeatherModel;
};

export const Daily = ({ theme, unit, data }: DailyProps) => {
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
            <>
              <DailyItem
                theme={theme}
                unit={unit}
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
                  theme={theme}
                  unit={unit}
                  data={d}
                ></DailyItemDetails>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;
