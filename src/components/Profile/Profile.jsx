import React from "react";
import { Navigate } from "react-router-dom";

import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  const profileData = props.profilePage.userProfile;
  const profileStatus = props.profilePage.userStatus;
  const setUserStatus = props.setUserStatus;
  const getUserStatus = props.getUserStatus;

  const isAuthorized = props.authData.isAuthorized;

  //console.log(isAuthorized);
  !isAuthorized && <Navigate to="/login" />;

  return (
    <div className={classes.content}>
      <ProfileInfo
        props={profileData}
        profileStatus={profileStatus}
        setUserStatus={setUserStatus}
        getUserStatus={getUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
