import { Preloader } from "components/common/preloader/Preloader";
import React from "react";
import emptyUser from "../../../../assets/img/emptyUser.png";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import {
  StyledAvatar,
  StyledEmptyAvatar,
  StyledInfoContainer,
  StyledProfileInfoWrapper,
  StyledProfileName,
} from "./styles";

export const ProfileInfo = (props) => {
  const profileData = props.props;

  return (
    <>
      {profileData !== null ? (
        <StyledProfileInfoWrapper>
          {profileData.photos.small ? (
            <StyledAvatar src={profileData.photos.small} alt="avatar" />
          ) : (
            <StyledEmptyAvatar src={emptyUser} alt="avatar" />
          )}
          <StyledInfoContainer>
            <StyledProfileName>{profileData.fullName}</StyledProfileName>
            <ProfileStatus
              {...profileData}
              setUserStatus={props.setUserStatus}
              getUserStatus={props.getUserStatus}
              profileStatus={props.profileStatus}
            />
          </StyledInfoContainer>
        </StyledProfileInfoWrapper>
      ) : (
        <Preloader />
      )}
    </>
  );
};
