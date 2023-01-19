import { Preloader } from "components/common/preloader/Preloader";
import React from "react";
import wallpaper from "../../../assets/img/wallpaper1.jpg";

import classes from "./ProfileInfo.module.css";

export const ProfileInfo = (props) => {
  const profileData = props.props;

  return (
    <div>
      {profileData !== null ? (
        <div>
          <img
            className={classes.wallpaper}
            src={wallpaper}
            alt="wallpaper"
          ></img>
          <img
            className={classes.photo}
            src={profileData.photos.small}
            alt="avatar"
          ></img>
          <div>{profileData.fullName}</div>
          <div>{profileData.aboutMe}</div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
