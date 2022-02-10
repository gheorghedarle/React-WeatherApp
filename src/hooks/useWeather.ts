import axios from "axios";
import { useEffect, useState } from "react";
import { CurrentWeatherModel, EmptyCurrentWeather } from "../models";
import {
  CurrentWeatherDetailsModel,
  EmptyCurrentWeatherDetails,
} from "../models/CurrentWeatherDetailsModel";

export const useWeather = (lat: number, lon: number, units: string) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const path = "onecall";

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const [currentWeatherDetails, setCurrentWeatherDetails] =
    useState<CurrentWeatherDetailsModel>(EmptyCurrentWeatherDetails);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setCurrent(response.data.current);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [lat, lon, units, baseUrl, apiKey]);

  const setCurrent = (data: any) => {
    setCurrentWeather({
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

  return { isLoading, currentWeather, currentWeatherDetails };
};
