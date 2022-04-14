export type ThemeType = "light" | "dark";
export type UnitType = "metric" | "imperial";

export interface SettingsModel {
  useMockData: boolean;
  theme: ThemeType;
  unit: UnitType;
}
