import { TextArea } from "components/common/FormsControl/FormsControl";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "utils/validators";
import { StyledAddPostForm, StyledAddPostFormWrapper } from "./StyledAddPost";

const maxLength = maxLengthCreator(10);

const AddPostForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledAddPostForm onSubmit={handleSubmit}>
      <StyledAddPostFormWrapper>
        <Field
          validate={[requiredField, maxLength]}
          component={TextArea}
          placeholder="Введите текст"
          name={"postText"}
        />
        <button>Добавить пост</button>
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
