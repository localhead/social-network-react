import { Preloader } from "components/common/preloader/Preloader";
import React, { memo } from "react";
import emptyUser from "../../../../assets/img/emptyUser.png";
import { PostsContainer } from "../Posts/PostsContainer";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import {
  StyledAvatar,
  StyledContactEmptyTitle,
  StyledContactLink,
  StyledContactsTitle,
  StyledEmptyAvatar,
  StyledIcon,
  StyledInfoContainer,
  StyledInputPhoto,
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
  const { profilePage, authData, savePhotoThunk } = props;

  const authUserId = authData.id;

  console.log(authUserId, profilePage);

  const onChangeClickImage = (e) => {
    debugger;
    if (e.target.files.length) {
      savePhotoThunk(e.target.files[0]);
    }
  };

  return (
    <>
      {profilePage !== null ? (
        <StyledProfileInfoWrapper>
          {profilePage.photos.small ? (
            <StyledAvatar src={profilePage.photos.large} alt="avatar" />
          ) : (
            <StyledEmptyAvatar src={emptyUser} alt="avatar" />
          )}
          {profilePage && profilePage.userId === authUserId && (
            <StyledInputPhoto
              type="file"
              name="file"
              id="input__file"
              onChange={onChangeClickImage}
            />
          )}

          <StyledInfoContainer>
            <StyledProfileName>{profilePage.fullName}</StyledProfileName>
            <ProfileStatus
              {...profilePage}
              setUserStatus={props.setUserStatus}
              getUserStatus={props.getUserStatus}
              profileStatus={props.profileStatus}
              authData={props.authData}
            />
            <StyledWorkInfoContainer>
              <StyledWorkStatusTitle>Место работы:</StyledWorkStatusTitle>
              <StyledWorkStatus>
                {profilePage.lookingForAJob === false
                  ? "Ищу работу"
                  : profilePage.lookingForAJobDescription}
              </StyledWorkStatus>
            </StyledWorkInfoContainer>
            <StyledContactsTitle>Контакты</StyledContactsTitle>
            <StyledProfileContacts>
              <StyledProfileContactItem>
                <StyledIcon src={facebookIcon} alt="facebook" />
                {profilePage.contacts.facebook === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.facebook}
                    target="_blank"
                  >
                    {profilePage.contacts.facebook}
                  </StyledContactLink>
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={instagramIcon} alt="facebook" />
                {profilePage.contacts.instagram === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.instagram}
                    target="_blank"
                  >
                    {profilePage.contacts.instagram}
                  </StyledContactLink>
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={githubIcon} alt="github" />
                {profilePage.contacts.github === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.github}
                    target="_blank"
                  >
                    {profilePage.contacts.github}
                  </StyledContactLink>
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={vkIcon} alt="vk" />
                {profilePage.contacts.vk === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.vk}
                    target="_blank"
                  >
                    {profilePage.contacts.vk}
                  </StyledContactLink>
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
