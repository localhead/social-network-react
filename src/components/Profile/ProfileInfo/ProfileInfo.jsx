import React from "react";
import wallpaper from "../../../assets/img/wallpaper1.jpg";

import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.wallpaper} src={wallpaper} alt="wallpaper"></img>
      <div>ava+description</div>
    </div>
  );
};
