import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

export const Header = ({ theme, setTheme }) => {
  const getCurrentDate = () => {
    var date = new Date().toLocaleString("en", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    });

    var year = new Date().toLocaleString("en", {
      year: "numeric",
    });

    var hour = new Date().toLocaleString("en", {
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
            if (theme === "dark") setTheme("light");
            else setTheme("dark");
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
