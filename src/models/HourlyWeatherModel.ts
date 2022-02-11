import { CurrentWeatherModel } from ".";

export interface HourlyWeatherModel {
  hourly: CurrentWeatherModel[];
}

export const EmptyHourlyWeatherModel: HourlyWeatherModel = {
  hourly: [],
};
