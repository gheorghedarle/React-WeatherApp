export interface CurrentWeatherDetailsModel {
  rain: number;
  humidity: number;
  pressure: number;
  visibility: number;
  wind_speed: number;
}

export const EmptyCurrentWeatherDetails: CurrentWeatherDetailsModel = {
  rain: NaN,
  humidity: NaN,
  pressure: NaN,
  visibility: NaN,
  wind_speed: NaN,
};
