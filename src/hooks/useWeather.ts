import axios from "axios";
import { useEffect, useState } from "react";
import {
  CurrentWeatherDetailsModel,
  CurrentWeatherModel,
  EmptyCurrentWeather,
  EmptyCurrentWeatherDetails,
  EmptyHourlyWeatherModel,
  HourlyWeatherModel,
} from "../models";

export const useWeather = (lat: number, lon: number, units: string) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const path = "onecall";

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const [currentWeatherDetails, setCurrentWeatherDetails] =
    useState<CurrentWeatherDetailsModel>(EmptyCurrentWeatherDetails);

  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [lat, lon, units, baseUrl, apiKey]);

  const setCurrent = (data: any) => {
    setCurrentWeather({
      dt: data.dt,
      weather: {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      },
      temp: data.temp,
      feels_like: data.feels_like,
    });
    setCurrentWeatherDetails({
      rain: 0,
      visibility: data.visibility / 1000,
      humidity: data.humidity,
      pressure: data.pressure,
      wind_speed: data.wind_speed,
    });
  };

  const setHourly = (data: any) => {
    let hourly: CurrentWeatherModel[] = [];
    data.forEach((item: any) => {
      hourly.push({
        dt: item.dt,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        temp: item.temp,
        feels_like: item.feels_like,
      });
    });
    setHourlyWeather({ hourly: hourly });
  };

  return { isLoading, currentWeather, currentWeatherDetails, hourlyWeather };
};
