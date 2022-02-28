import axios from "axios";
import { useEffect, useState } from "react";
import {
  CurrentWeatherModel,
  DailyWeatherDetailsModel,
  DailyWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
  EmptyHourlyWeatherModel,
  HourlyWeatherModel,
} from "../models";

export const useWeather = (
  lat: number,
  lon: number,
  units: string,
  useMockData: boolean
) => {
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
    const url = useMockData
      ? "./mock-data/weather.json"
      : `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
        setDaily(response.data.daily);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [lat, lon, units, useMockData, baseUrl, apiKey]);

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
    data.slice(0, 24).forEach((item: any) => {
      hourly.push({
        dt: item.dt,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        temp: item.temp,
        feels_like: item.feels_like,
        details: {
          rain: item.pop * 100,
          visibility: item.visibility / 1000,
          humidity: item.humidity,
          pressure: item.pressure,
          wind_speed: item.wind_speed,
        },
      });
    });
    console.log(hourly.length);
    setHourlyWeather({ hourly: hourly });
  };

  const setDaily = (data: any) => {
    let daily: DailyWeatherDetailsModel[] = [];
    data.slice(1).forEach((item: any) => {
      daily.push({
        dt: item.dt,
        clouds: item.clouds,
        humidity: item.humidity,
        pressure: item.pressure,
        sunrise: item.sunrise,
        sunset: item.sunset,
        minTemp: item.temp.min,
        maxTemp: item.temp.max,
        uvi: item.uvi,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        wind_speed: item.wind_speed,
        rain: item.pop * 100,
      });
    });
    console.log(daily.length);
    setDailyWeather({ daily: daily });
  };

  return { isLoading, currentWeather, hourlyWeather, dailyWeather };
};
