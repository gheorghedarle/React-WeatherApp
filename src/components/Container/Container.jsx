import React from "react";
import Header from "../Header/Header";
import Current from "../Current/Current";
import Hourly from "../Hourly/Hourly";
import "./Container.scss";

export const Container = ({ theme, setTheme }) => {
  return (
    <div className="container">
      <div className="grid-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <Current theme={theme}></Current>
        <Hourly theme={theme}></Hourly>
      </div>
    </div>
  );
};
