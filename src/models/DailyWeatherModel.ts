import { CurrentWeatherModel } from ".";

export interface DailyWeatherModel {
  daily: CurrentWeatherModel[];
}

export const EmptyDailyWeatherModel: DailyWeatherModel = {
  daily: [],
};
