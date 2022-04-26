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
  dt: 0,
  rain: 0,
  humidity: 0,
  pressure: 0,
  clouds: 0,
  wind_speed: 0,
  uvi: 0,
  sunrise: 0,
  sunset: 0,
  minTemp: 0,
  maxTemp: 0,
  visibility: 0,
  weather: EmptyWeather,
};
