import { reduxForm } from "redux-form";
import {
  StyledContactsTitle,
  StyledEditUserForm,
  StyledField,
  StyledFormItem,
  StyledTitle,
} from "./styles";
import React from "react";
import { TextArea } from "components/common/FormsControl/FormsControl";

import { ButtonPrimary } from "packages/uiKit/ButtonPrimary";

export const EditUser = (props) => {
  const { handleSubmit, profilePage } = props;

  console.log(profilePage);

  return (
    <StyledEditUserForm onSubmit={handleSubmit}>
      <StyledFormItem>
        <StyledTitle>About me:</StyledTitle>
        <StyledField
          component={TextArea}
          placeholder="Введите текст"
          name={"AboutMe"}
        />
      </StyledFormItem>
      <StyledFormItem>
        <StyledTitle>Full Name:</StyledTitle>
        <StyledField
          component={"input"}
          name={"FullName"}
          placeholder={profilePage.fullName}
        />
      </StyledFormItem>
      <StyledFormItem>
        <StyledTitle>Looking for a job?</StyledTitle>
        <StyledField
          type="checkbox"
          component={"input"}
          name={"LookingForAJob"}
        />
      </StyledFormItem>
      <StyledFormItem>
        <StyledTitle>Describe your job</StyledTitle>
        <StyledField
          placeholder=""
          component={"input"}
          name={"LookingForAJobDescription"}
        />
      </StyledFormItem>
      <StyledContactsTitle>Contacts</StyledContactsTitle>
      {Object.keys(profilePage.contacts).map((key) => {
        return (
          <StyledFormItem key={key}>
            <StyledTitle>{key}</StyledTitle>
            <StyledField
              placeholder=""
              component={"input"}
              name={"contacts." + key}
            />
          </StyledFormItem>
        );
      })}
      <div>
        <ButtonPrimary>Save</ButtonPrimary>
      </div>
    </StyledEditUserForm>
  );
};

export const EditUserReduxForm = reduxForm({
  form: "edit-user",
})(EditUser);
