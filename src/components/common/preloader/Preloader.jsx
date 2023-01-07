import preloaderImg from "../../../assets/svgs/spinner.gif";
import React from "react";
import classes from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <>
      <img src={preloaderImg} alt="preloader" className={classes.image} />
    </>
  );
};
