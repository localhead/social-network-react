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
import { requiredField } from "utils/validators";
import { ButtonPrimary } from "packages/uiKit/ButtonPrimary";

export const EditUser = (props) => {
  const { handleSubmit, profilePage } = props;

  return (
    <StyledEditUserForm onSubmit={handleSubmit}>
      <StyledFormItem>
        <StyledTitle>About me:</StyledTitle>
        <StyledField
          component={TextArea}
          placeholder="Введите текст"
          name={"messageText"}
        />
      </StyledFormItem>
      <StyledFormItem>
        <StyledTitle>Full Name:</StyledTitle>
        <StyledField placeholder="" component={"input"} name={"name"} />
      </StyledFormItem>
      <StyledFormItem>
        <StyledTitle>Looking for a job?</StyledTitle>
        <StyledField type="checkbox" component={"input"} name={"jobCheckbox"} />
      </StyledFormItem>
      <StyledFormItem>
        <StyledTitle>Describe your job</StyledTitle>
        <StyledField
          placeholder=""
          component={"input"}
          name={"jobDescription"}
        />
      </StyledFormItem>
      <StyledContactsTitle>Contacts</StyledContactsTitle>
      <div>
        <ButtonPrimary>Save</ButtonPrimary>
      </div>
    </StyledEditUserForm>
  );
};

export const EditUserReduxForm = reduxForm({
  form: "edit-user",
})(EditUser);
