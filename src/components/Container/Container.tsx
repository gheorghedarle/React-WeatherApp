import React, { useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import Header from "../Header/Header";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CurrentWeatherDetails from "../CurrentWeatherDetails/CurrentWeatherDetails";
import Hourly from "../Hourly/Hourly";
import Daily from "../Daily/Daily";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  ThemeType,
} from "../../models";
import "./Container.scss";

type ContainerProps = {
  theme: string;
  changeTheme: (theme: ThemeType) => void;
};

export const Container = ({ theme, changeTheme }: ContainerProps) => {
  const unit: string = "metric";
  const useMockData: boolean = true;

  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  const { isLoading, location, currentWeather, hourlyWeather, dailyWeather } =
    useWeather(currentLocationName, unit, useMockData);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
    setCurrentWeatherSelectedItem(current);
  };

  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
  };

  return (
    <>
      {useMockData ? (
        <div className="info-popup">
          The application is running in demo mode. To run the application with
          real data please check the{" "}
          <a href="https://github.com/gheorghedarle/React-WeatherApp">
            documentation
          </a>
          .
        </div>
      ) : (
        <></>
      )}
      <div className="container">
        {!isLoading ? (
          <div className="grid-container">
            <Header
              locality={location.locality}
              country={location.country}
              data={currentWeatherSelectedItem}
              theme={theme}
              changeTheme={changeTheme}
              changeLocation={changeLocationHandler}
            ></Header>
            <CurrentWeather
              theme={theme}
              unit={unit}
              data={currentWeatherSelectedItem}
            ></CurrentWeather>
            <CurrentWeatherDetails
              data={currentWeatherSelectedItem.details}
            ></CurrentWeatherDetails>
            <Hourly
              theme={theme}
              unit={unit}
              data={hourlyWeather}
              clickHandler={hourlyItemClickHandler}
            ></Hourly>
            <Daily theme={theme} unit={unit} data={dailyWeather}></Daily>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </>
  );
};
