import axios from "axios";
import { useEffect, useState } from "react";
import {
  CurrentWeatherModel,
  DailyWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
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
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherModel>(
    EmptyDailyWeatherModel
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`
      )
      .then((response) => {
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
        setDaily(response.data.daily);
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
      details: {
        rain: 0,
        visibility: data.visibility / 1000,
        humidity: data.humidity,
        pressure: data.pressure,
        wind_speed: data.wind_speed,
      },
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
        // details: {
        //   rain: 0,
        //   visibility: data.visibility / 1000,
        //   humidity: data.humidity,
        //   pressure: data.pressure,
        //   wind_speed: data.wind_speed,
        // },
      });
    });
    setHourlyWeather({ hourly: hourly });
  };

  const setDaily = (data: any) => {
    let daily: CurrentWeatherModel[] = [];
    data.forEach((item: any) => {
      daily.push({
        dt: item.dt,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        temp: item.temp,
        feels_like: item.feels_like,
        // details: {
        //   rain: 0,
        //   visibility: data.visibility / 1000,
        //   humidity: data.humidity,
        //   pressure: data.pressure,
        //   wind_speed: data.wind_speed,
        // },
      });
    });
    setDailyWeather({ daily: daily });
  };

  return { isLoading, currentWeather, hourlyWeather, dailyWeather };
};
