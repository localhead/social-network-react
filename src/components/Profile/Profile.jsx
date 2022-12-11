import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";

import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  const { postsData, dispatch, textAreaValue } = props;

  return (
    <div className={classes.content}>
      <ProfileInfo />

      <MyPosts
        textAreaValue={textAreaValue}
        postsData={postsData}
        dispatch={dispatch}
      />
    </div>
  );
};
