import React, { useState } from "react";
import logo from "../../../assets/img/companyLogo.png";

import {
  StyledAvatarContainer,
  StyledAvatarImage,
  StyledCaretImage,
  StyledDropdown,
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
} from "./styles";

import userEmptyAvatarImage from "../../../assets/img/emptyUser.png";

import userIcon from "../../../assets/svgs/UserIcon.svg";
import signOut from "../../../assets/svgs/SignOut.svg";

import caretImage from "../../../assets/svgs/CaretRight.svg";
import { ButtonPrimary } from "packages/uiKit/ButtonPrimary";

export const Header = function (props) {
  const LogoutHandler = () => {
    props.logoutUser();
  };

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo src={logo} alt="logo" />

        <StyledAvatarContainer
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          <StyledAvatarImage src={userEmptyAvatarImage} alt="avatar" />
          <StyledCaretImage src={caretImage} alt="caret" />
        </StyledAvatarContainer>
        {showDropdown && (
          <StyledDropdown>
            <ButtonPrimary icon={userIcon}>Настройки</ButtonPrimary>
            <ButtonPrimary icon={signOut} onClick={LogoutHandler}>
              Выйти
            </ButtonPrimary>
          </StyledDropdown>
        )}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
