import { Preloader } from "components/common/preloader/Preloader";
import React, { memo, useState } from "react";
import emptyUser from "../../../../assets/img/emptyUser.png";
import { PostsContainer } from "../Posts/PostsContainer";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import {
  StyledAvatar,
  StyledButtonOutlined,
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
import youtubeIcon from "../../../../assets/svgs/YouTube.svg";
import twitterIcon from "../../../../assets/svgs/twitter.svg";
import webIcon from "../../../../assets/svgs/global.svg";

import { ModalWindow } from "./ModalWindow/ModalWindow";

const _ProfileInfo = (props) => {
  const { profilePage, authData, savePhotoThunk, saveProfileDataThunk } = props;

  const [modalState, setModalState] = useState(false);

  const authUserId = authData.id;

  const onEditProfileClick = () => {
    setModalState((prev) => !prev);
  };

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
            <>
              <StyledInputPhoto
                type="file"
                name="file"
                id="input__file"
                onChange={onChangeClickImage}
              />
            </>
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
              <StyledWorkStatusTitle>Обо мне:</StyledWorkStatusTitle>
              <StyledWorkStatus>{profilePage.aboutMe}</StyledWorkStatus>
            </StyledWorkInfoContainer>
            <StyledWorkInfoContainer>
              <StyledWorkStatusTitle>Место работы:</StyledWorkStatusTitle>
              <StyledWorkStatus>
                {profilePage.lookingForAJob === true
                  ? "Ищу работу"
                  : "Трудоустроен"}
              </StyledWorkStatus>
            </StyledWorkInfoContainer>
            <StyledWorkInfoContainer>
              <StyledWorkStatusTitle>Описание работы:</StyledWorkStatusTitle>
              <StyledWorkStatus>
                {profilePage.lookingForAJobDescription}
              </StyledWorkStatus>
            </StyledWorkInfoContainer>
            <StyledContactsTitle>Контакты</StyledContactsTitle>

            <StyledProfileContacts>
              {/* {Object.keys(profilePage.contacts).map((key) => {
                return (
                  <StyledContactItem key={key}>
                    {key}
                    {profilePage.contacts[key]}
                  </StyledContactItem>
                );
              })} */}
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
              <StyledProfileContactItem>
                <StyledIcon src={youtubeIcon} alt="youtube" />
                {profilePage.contacts.youtube === null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.youtube}
                    target="_blank"
                  >
                    {profilePage.contacts.youtube}
                  </StyledContactLink>
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={webIcon} alt="website" />
                {profilePage.contacts.youtube == null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.youtube}
                    target="_blank"
                  >
                    {profilePage.contacts.youtube}
                  </StyledContactLink>
                )}
              </StyledProfileContactItem>
              <StyledProfileContactItem>
                <StyledIcon src={twitterIcon} alt="twitter" />
                {profilePage.contacts.twitter == null ? (
                  <StyledContactEmptyTitle>не указано</StyledContactEmptyTitle>
                ) : (
                  <StyledContactLink
                    href={profilePage.contacts.twitter}
                    target="_blank"
                  >
                    {profilePage.contacts.twitter}
                  </StyledContactLink>
                )}
              </StyledProfileContactItem>
            </StyledProfileContacts>
            {profilePage && profilePage.userId === authUserId && (
              <StyledButtonOutlined onClick={onEditProfileClick}>
                Редактировать профиль
              </StyledButtonOutlined>
            )}
          </StyledInfoContainer>

          <StyledPostsContainer>
            <PostsContainer />
          </StyledPostsContainer>
          {modalState && (
            <ModalWindow
              onClickOverlay={onEditProfileClick}
              profilePage={profilePage}
              onClose={onEditProfileClick}
              saveProfileDataThunk={saveProfileDataThunk}
            />
          )}
        </StyledProfileInfoWrapper>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export const ProfileInfo = memo(_ProfileInfo);
