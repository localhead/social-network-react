import { Preloader } from "components/common/preloader/Preloader";
import React from "react";
import wallpaper from "../../../../assets/img/wallpaper1.jpg";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import {
  StyledAvatar,
  StyledBannerImage,
  StyledProfileInfoWrapper,
  StyledProfileName,
} from "./StyledProfileInfo";

export const ProfileInfo = (props) => {
  const profileData = props.props;

  return (
    <>
      {profileData !== null ? (
        <StyledProfileInfoWrapper>
          <StyledBannerImage src={wallpaper} alt="wallpaper" />
          <StyledAvatar src={profileData.photos.small} alt="avatar" />
          <StyledProfileName>{profileData.fullName}</StyledProfileName>
          <ProfileStatus
            {...profileData}
            setUserStatus={props.setUserStatus}
            getUserStatus={props.getUserStatus}
            profileStatus={props.profileStatus}
          />
        </StyledProfileInfoWrapper>
      ) : (
        <Preloader />
      )}
    </>
  );
};
