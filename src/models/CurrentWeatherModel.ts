import { CurrentWeatherDetailsModel, EmptyWeather, WeatherModel } from ".";

export interface CurrentWeatherModel {
  dt: number;
  weather: WeatherModel;
  temp: number;
  feels_like: number;
  details?: CurrentWeatherDetailsModel;
}

export const EmptyCurrentWeather: CurrentWeatherModel = {
  dt: 0,
  weather: EmptyWeather,
  temp: 0,
  feels_like: 0,
  details: undefined,
};
