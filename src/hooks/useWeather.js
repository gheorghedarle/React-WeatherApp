import axios from "axios";
import { useEffect } from "react";

export const useWeather = (lat, lon) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const path = "onecall";
  const units = "metric";
  const apiKey = "";
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }, [lat, lon]);
  return [];
};
