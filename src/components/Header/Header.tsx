import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentWeatherModel, ThemeType } from "../../models";
import "./Header.scss";

type HeaderProps = {
  data: CurrentWeatherModel;
  theme: string;
  changeTheme: (theme: ThemeType) => void;
};

export const Header = ({ data, theme, changeTheme }: HeaderProps) => {
  const getCurrentDate = () => {
    const selectedDate = new Date(data.dt * 1000);
    var date = selectedDate.toLocaleString("en-GB", {
      day: "numeric",
      weekday: "long",
      month: "long",
    });
    var year = selectedDate.toLocaleString("en-GB", {
      year: "numeric",
    });
    var hour = selectedDate.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${date} ${year} ${hour}`;
  };

  return (
    <>
      <div className="location">
        <label className="city">Timișoara</label>
        <label className="country">Romania</label>
        <label className="date">{getCurrentDate()}</label>
      </div>
      <div className="settings">
        <div
          className="button-theme"
          onClick={() => {
            if (theme === "dark") changeTheme("light");
            else changeTheme("dark");
          }}
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="search">
        <input className="input" placeholder="Enter your location"></input>
      </div>
    </>
  );
};

export default Header;
