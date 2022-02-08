import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const Header = ({ theme, setTheme }: HeaderProps) => {
  const getCurrentDate = () => {
    var date = new Date().toLocaleString("en-GB", {
      day: "numeric",
      weekday: "long",
      month: "long",
    });

    var year = new Date().toLocaleString("en-GB", {
      year: "numeric",
    });

    var hour = new Date().toLocaleString("en-GB", {
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
