import { ButtonPrimary } from "packages/uiKit/ButtonPrimary";
import React from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "utils/validators";
import {
  StyledAddPostForm,
  StyledAddPostFormWrapper,
  StyledField,
} from "./StyledAddPost";

const maxLength = maxLengthCreator(10);

const AddPostForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledAddPostForm onSubmit={handleSubmit}>
      <StyledAddPostFormWrapper>
        <StyledField
          validate={[requiredField, maxLength]}
          component={"textarea"}
          placeholder="Что у вас нового?"
          name={"postText"}
        />
        <ButtonPrimary>Добавить пост</ButtonPrimary>
      </StyledAddPostFormWrapper>
    </StyledAddPostForm>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

export const AddPost = (props) => {
  const { onSubmit } = props;

  return <AddPostReduxForm onSubmit={onSubmit} />;
};
