import React, { useState } from "react";
import DailyItem from "../DailyItem/DailyItem";
import { DailyWeatherModel } from "../../models";
import "./Daily.scss";

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
                onClick={() => clickHandler(d)}
              ></DailyItem>
              <div
                className={
                  activeIndex === d.dt
                    ? "daily-item-header active"
                    : "daily-item-header"
                }
              >
                {
                  <div className="daily-item-details">
                    <div className="daily-details-grid">
                      <div className="daily-details-grid-item">
                        <label>Rain:</label>
                        <label>{d.details?.rain}%</label>
                      </div>{" "}
                      <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{d.details?.pressure}hPa</label>
                      </div>{" "}
                      <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{d.details?.humidity}%</label>
                      </div>{" "}
                      <div className="daily-details-grid-item">
                        <label>Visibility:</label>
                        <label>{d.details?.visibility} km</label>
                      </div>{" "}
                      <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{d.details?.wind_speed} m/s</label>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Daily;
