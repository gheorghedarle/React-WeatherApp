import { EmptyWeather, WeatherModel } from ".";

export interface DailyWeatherDetailsModel {
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
  weather: WeatherModel;
}

export const EmptyDailyWeatherDetails: DailyWeatherDetailsModel = {
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
  weather: EmptyWeather,
};
