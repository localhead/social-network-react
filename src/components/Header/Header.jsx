import React from "react";
import logo from "../../assets/img/logo.png";

import classes from "./Header.module.css";

export const Header = function (props) {
  //console.log(props);
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo"></img>
      {props.login ? (
        <div>{props.login}</div>
      ) : (
        <button className={classes["login-btn"]}>войти</button>
      )}
    </header>
  );
};
