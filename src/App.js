import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import "./App.scss";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={theme}>
      <div className="main-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <CurrentWeather theme={theme}></CurrentWeather>
      </div>
    </main>
  );
};

export default App;
