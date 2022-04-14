import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./components/Container/Container";
import { SettingsModel, ThemeType } from "./models";
import "./App.scss";

export const App = () => {
  const useMockData: boolean = true;
  const [settings, setSettings] = useState<SettingsModel>({
    useMockData: useMockData,
    theme: "light",
    unit: "metric",
  });

  const setInitialSettings = useCallback(() => {
    const existingSettings = localStorage.getItem("settings");
    if (existingSettings) {
      setSettings(JSON.parse(existingSettings));
    } else {
      setSettings({ useMockData: useMockData, theme: "light", unit: "metric" });
      localStorage.setItem("settings", JSON.stringify(settings));
    }
  }, [settings, useMockData]);

  useEffect(() => {
    setInitialSettings();
  }, [setInitialSettings]);

  const changeSettingsHandler = (object: object) => {
    setSettings({ ...settings, ...object });
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...settings, ...object })
    );
  };

  return (
    <main className={settings.theme}>
      <div className="main-container">
        <Container
          settings={settings}
          changeSettings={changeSettingsHandler}
        ></Container>
      </div>
    </main>
  );
};

export default App;
