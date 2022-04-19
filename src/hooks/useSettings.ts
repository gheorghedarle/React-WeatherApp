import { useEffect, useState } from "react";
import { defaultSettings, SettingsModel } from "../models";

export const useSettings = () => {
  const [settings, setSettings] = useState<SettingsModel>(defaultSettings);

  useEffect(() => {
    const existingSettings = localStorage.getItem("settings");
    if (existingSettings) {
      setSettings(JSON.parse(existingSettings));
    } else {
      setSettings(defaultSettings);
      localStorage.setItem("settings", JSON.stringify(defaultSettings));
    }
  }, []);

  const changeSettings = (newSettings: object) => {
    setSettings({ ...settings, ...newSettings });
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...settings, ...newSettings })
    );
  };

  return {
    settings,
    changeSettings,
  };
};
