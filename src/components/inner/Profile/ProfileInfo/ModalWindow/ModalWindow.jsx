import React from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledModalContent,
  StyledXImage,
} from "./styles";

import XIcon from "../../../../../assets/svgs/X.svg";
import { EditUserReduxForm } from "../EditUserForm/EditUserForm";

export const ModalWindow = (props) => {
  const { onClickOverlay, onClose, saveProfileDataThunk, profilePage } = props;

  const onSubmitHandler = (formData) => {
    console.log(formData);
    saveProfileDataThunk(formData);
    onClose();
  };

  return (
    <>
      <StyledContainer onClick={onClickOverlay}></StyledContainer>
      <StyledModalContent>Редактирование профиля</StyledModalContent>
      <StyledWrapper>
        <EditUserReduxForm
          onSubmit={onSubmitHandler}
          profilePage={profilePage}
          initialValues={profilePage}
        />
      </StyledWrapper>

      <StyledXImage src={XIcon} onClick={onClickOverlay} />
    </>
  );
};
