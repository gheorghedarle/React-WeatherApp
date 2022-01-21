import React from "react";
import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import "./Container.scss";

export const Container = ({ theme, setTheme }) => {
  return (
    <div className="container">
      <div className="grid-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <CurrentWeather theme={theme}></CurrentWeather>
      </div>
    </div>
  );
};
