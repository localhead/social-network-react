import React from "react";
import logo from "../../assets/img/logo.png";

import classes from "./Header.module.css";

export const Header = function () {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo"></img>
    </header>
  );
};
