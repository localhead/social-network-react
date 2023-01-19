import React from "react";

import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  const profileData = props.props.props.profilePage.userProfile;
  //console.log(props.props.props.profilePage.userProfile);

  return (
    <div className={classes.content}>
      <ProfileInfo props={profileData} />
      <MyPostsContainer />
    </div>
  );
};
