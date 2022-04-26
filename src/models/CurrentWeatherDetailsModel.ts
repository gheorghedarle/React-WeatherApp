export interface CurrentWeatherDetailsModel {
  rain: number;
  humidity: number;
  pressure: number;
  visibility: number;
  wind_speed: number;
}

export const EmptyCurrentWeatherDetails: CurrentWeatherDetailsModel = {
  rain: 0,
  humidity: 0,
  pressure: 0,
  visibility: 0,
  wind_speed: 0,
};
