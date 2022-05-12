import React from "react";
import { DailyWeatherDetailsModel } from "../../models";
import "./DailyItemDetails.scss";

type DailyItemDetailsProps = {
  data: DailyWeatherDetailsModel;
};

export const DailyItemDetails = ({ data }: DailyItemDetailsProps) => {
  return (
    <div className="daily-item-details">
      <div className="daily-details-grid">
        <div className="daily-details-grid-item">
          <label>Rain:</label>
          <label>{data.rain.toFixed(2)}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Pressure:</label>
          <label>{data.pressure}hPa</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Humidity:</label>
          <label>{data.humidity}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Clouds:</label>
          <label>{data.clouds}%</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Wind speed:</label>
          <label>{data ? Math.round(data.wind_speed) : ""} m/s</label>
        </div>
        <div className="daily-details-grid-item">
          <label>UV Index:</label>
          <label>{data.uvi}</label>
        </div>
        <div className="daily-details-grid-item">
          <label>Sunrise:</label>
          <label>
            {new Date(data.sunrise * 1000).toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </label>
        </div>
        <div className="daily-details-grid-item">
          <label>Sunset:</label>
          <label>
            {new Date(data.sunset * 1000).toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </label>
        </div>
      </div>
    </div>
  );
};

export default DailyItemDetails;
