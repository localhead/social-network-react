import { Preloader } from "components/common/preloader/Preloader";
import React, { memo } from "react";
import emptyUser from "../../../../assets/img/emptyUser.png";
import { PostsContainer } from "../Posts/PostsContainer";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import {
  StyledAvatar,
  StyledContactEmptyTitle,
  StyledContactsTitle,
  StyledEmptyAvatar,
  StyledIcon,
  StyledInfoContainer,
  StyledPostsContainer,
  StyledProfileContactItem,
  StyledProfileContacts,
  StyledProfileInfoWrapper,
  StyledProfileName,
  StyledWorkInfoContainer,
  StyledWorkStatus,
  StyledWorkStatusTitle,
} from "./styles";

import facebookIcon from "../../../../assets/svgs/Facebook.svg";
import instagramIcon from "../../../../assets/svgs/Instagram.svg";
import githubIcon from "../../../../assets/svgs/github.svg";
import vkIcon from "../../../../assets/svgs/vk.svg";

const _ProfileInfo = (props) => {
  const profileData = props.profileData;

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
            <StyledWorkInfoContainer>
              <StyledWorkStatusTitle>Место работы:</StyledWorkStatusTitle>
              <StyledWorkStatus>
                {profileData.lookingForAJob === false
                  ? "Ищу работу"
                  : profileData.lookingForAJobDescription}
              </StyledWorkStatus>
            </StyledWorkInfoContainer>
            <StyledContactsTitle>Контакты</StyledContactsTitle>
            <StyledProfileContacts>
              <StyledProfileContactItem>
                <StyledIcon src={facebookIcon} alt="facebook" />
                {profileData.contacts.facebook === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  profileData.contacts.facebook
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={instagramIcon} alt="facebook" />
                {profileData.contacts.instagram === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  profileData.contacts.instagram
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={githubIcon} alt="github" />
                {profileData.contacts.github === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  profileData.contacts.github
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={vkIcon} alt="vk" />
                {profileData.contacts.vk === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  profileData.contacts.vk
                )}
              </StyledProfileContactItem>
            </StyledProfileContacts>
          </StyledInfoContainer>

          <StyledPostsContainer>
            <PostsContainer />
          </StyledPostsContainer>
        </StyledProfileInfoWrapper>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export const ProfileInfo = memo(_ProfileInfo);
