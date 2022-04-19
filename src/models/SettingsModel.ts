export type ThemeType = "light" | "dark";
export type UnitType = "metric" | "imperial";

export interface SettingsModel {
  theme: ThemeType;
  unit: UnitType;
  useMockData: boolean;
}

export const defaultSettings: SettingsModel = {
  useMockData: false,
  theme: "light",
  unit: "metric",
};
