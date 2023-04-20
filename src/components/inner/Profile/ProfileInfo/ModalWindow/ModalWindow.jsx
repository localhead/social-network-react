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
  const { onClickOverlay } = props;
  const onSubmitHandler = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <StyledContainer onClick={onClickOverlay}></StyledContainer>
      <StyledModalContent>Редактирование профиля</StyledModalContent>
      <StyledWrapper>
        <EditUserReduxForm onSubmit={onSubmitHandler} />
      </StyledWrapper>

      <StyledXImage src={XIcon} onClick={onClickOverlay} />
    </>
  );
};
