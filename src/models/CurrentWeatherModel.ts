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
  temp: NaN,
  feels_like: NaN,
  details: undefined,
};
