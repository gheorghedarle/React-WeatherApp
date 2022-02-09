import { EmptyWeather, WeatherModel } from ".";

export interface CurrentWeatherModel {
  weather: WeatherModel;
  temp: number;
  feels_like: number;
}

export const EmptyCurrentWeather: CurrentWeatherModel = {
  weather: EmptyWeather,
  temp: NaN,
  feels_like: NaN,
};
