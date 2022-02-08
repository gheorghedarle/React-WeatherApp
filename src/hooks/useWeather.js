import axios from "axios";
import { useEffect } from "react";

export const useWeather = (lat, lon, units) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const path = "onecall";
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/${path}?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }, [lat, lon, units, baseUrl, apiKey]);
  return [];
};
