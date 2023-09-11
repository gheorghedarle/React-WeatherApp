import { CurrentWeatherDetailsModel, EmptyWeather, WeatherModel } from ".";

export interface CurrentWeatherModel {
  dt: number;
  weather: WeatherModel;
  temp: number;
  feels_like: number;
  timezone_offset: number;
  details?: CurrentWeatherDetailsModel;
}

export const EmptyCurrentWeather: CurrentWeatherModel = {
  dt: 0,
  weather: EmptyWeather,
  temp: 0,
  feels_like: 0,
  timezone_offset: 0,
  details: undefined,
};
