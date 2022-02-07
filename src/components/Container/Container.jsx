import React from "react";
import { useWeather } from "../../hooks";
import Header from "../Header/Header";
import Current from "../Current/Current";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import "./Container.scss";

export const Container = ({ theme, setTheme }) => {
  const [] = useWeather(45.7634188, 21.2397304);

  return (
    <div className="container">
      <div className="grid-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <Current theme={theme}></Current>
        <Hourly theme={theme}></Hourly>
        <Daily theme={theme}></Daily>
      </div>
    </div>
  );
};
