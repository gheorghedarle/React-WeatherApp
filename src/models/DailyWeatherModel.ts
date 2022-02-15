import { DailyWeatherDetailsModel } from ".";

export interface DailyWeatherModel {
  daily: DailyWeatherDetailsModel[];
}

export const EmptyDailyWeatherModel: DailyWeatherModel = {
  daily: [],
};
