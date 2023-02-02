import React from "react";
import { Navigate } from "react-router-dom";

import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  const profileData = props.props.props.profilePage.userProfile;
  //console.log(props.props.props.profilePage.userProfile);

  const isAuthorized = props.props.props.authData.isAuthorized;

  //console.log(isAuthorized);
  !isAuthorized && <Navigate to="/login" />;

  return (
    <div className={classes.content}>
      <ProfileInfo props={profileData} />
      <MyPostsContainer />
    </div>
  );
};
