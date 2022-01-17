import { Header } from "./components/Header/Header";
import "./App.scss";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
