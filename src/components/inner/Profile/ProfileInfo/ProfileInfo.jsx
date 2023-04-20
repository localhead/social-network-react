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
import { ModalWindow } from "./ModalWindow/ModalWindow";

const _ProfileInfo = (props) => {
  const { profilePage, authData, savePhotoThunk } = props;

  const [modalState, setModalState] = useState(false);

  const authUserId = authData.id;

  const onEditProfileClick = () => {
    setModalState((prev) => !prev);
  };

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
              <StyledWorkStatusTitle>Место работы:</StyledWorkStatusTitle>
              <StyledWorkStatus>
                {profilePage.lookingForAJob === false
                  ? "Ищу работу"
                  : profilePage.lookingForAJobDescription}
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
