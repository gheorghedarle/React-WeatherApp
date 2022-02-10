import React from "react";
import { useWeather } from "../../hooks";
import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CurrentWeatherDetails from "../CurrentWeatherDetails/CurrentWeatherDetails";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import "./Container.scss";

type ContainerProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const Container = ({ theme, setTheme }: ContainerProps) => {
  const unit = "metric";
  const { isLoading, currentWeather, currentWeatherDetails } = useWeather(
    45.7634188,
    21.2397304,
    unit
  );

  return (
    <div className="container">
      {!isLoading ? (
        <div className="grid-container">
          <Header theme={theme} setTheme={setTheme}></Header>
          <CurrentWeather
            theme={theme}
            unit={unit}
            data={currentWeather}
          ></CurrentWeather>
          <CurrentWeatherDetails
            data={currentWeatherDetails}
          ></CurrentWeatherDetails>
          <Hourly theme={theme}></Hourly>
          <Daily theme={theme}></Daily>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
