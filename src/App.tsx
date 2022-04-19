import React from "react";
import { Container } from "./components/Container/Container";
import { useSettings } from "./hooks/useSettings";
import "./App.scss";

export const App = () => {
  const { settings, changeSettings } = useSettings();

  return (
    <main className={settings.theme}>
      <div className="main-container">
        <Container
          settings={settings}
          changeSettings={changeSettings}
        ></Container>
      </div>
    </main>
  );
};

export default App;
