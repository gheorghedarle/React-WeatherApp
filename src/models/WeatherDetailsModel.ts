import { EmptyWeather, WeatherModel } from ".";

export interface WeatherDetailsModel {
  dt: number;
  rain: number;
  humidity: number;
  pressure: number;
  clouds: number;
  wind_speed: number;
  uvi: number;
  sunrise: number;
  sunset: number;
  minTemp: number;
  maxTemp: number;
  visibility: number;
  weather: WeatherModel;
}

export const EmptyCurrentWeatherDetails: WeatherDetailsModel = {
  dt: NaN,
  rain: NaN,
  humidity: NaN,
  pressure: NaN,
  clouds: NaN,
  wind_speed: NaN,
  uvi: NaN,
  sunrise: NaN,
  sunset: NaN,
  minTemp: NaN,
  maxTemp: NaN,
  visibility: NaN,
  weather: EmptyWeather,
};
