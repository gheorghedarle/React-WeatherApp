import React from "react";
import "./Header.scss";

export const Header = () => {
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
      <div className="city">Timișoara</div>
      <div className="country">Romania</div>
      <div className="date">{getCurrentDate()}</div>
    </>
  );
};