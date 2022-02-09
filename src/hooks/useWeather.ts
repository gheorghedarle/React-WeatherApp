import axios from "axios";
import { useEffect, useState } from "react";

export const useWeather = (lat: number, lon: number, units: string) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const path = "onecall";

  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        getCurrentWeather(response.data);
      });
  }, [lat, lon, units, baseUrl, apiKey]);

  const getCurrentWeather = (data: any) => {
    setCurrentWeather({ temp: data.current.temp });
  };

  return [currentWeather];
};
