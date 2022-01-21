import React, { useState } from "react";
import "./App.scss";
import { Container } from "./components/Container/Container";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={theme}>
      <div className="main-container">
        <Container theme={theme} setTheme={setTheme}></Container>
      </div>
    </main>
  );
};

export default App;
