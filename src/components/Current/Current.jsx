import React from "react";
import "./Current.scss";

export const Current = ({ theme }) => {
  const weatherCode = theme === "dark" ? "02d_n" : "02d";
  return (
    <>
      <div className="current">
        <div className="image">
          <img
            src={require(`../../resources/icon_${weatherCode}.png`)}
            className="icon"
            alt=""
          />
        </div>
        <div className="details">
          <div className="temp">
            23°<span>C</span>
          </div>
          <div className="feelslike">
            Feels like: <span>27°</span>
          </div>
          <div className="description">sunny</div>
        </div>
      </div>
      <div className="current-details"></div>
    </>
  );
};

export default Current;
