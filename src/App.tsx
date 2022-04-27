import React from "react";
import { Container } from "./components/Container/Container";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "./components/Common/Error/Error";
import "./App.scss";
import { useSettings } from "./hooks";

export const App = () => {
  const { settings, changeSettings } = useSettings();

  return (
    <main className={settings.theme}>
      <div className="main-container">
        <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <Container
            settings={settings}
            changeSettings={changeSettings}
          ></Container>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
