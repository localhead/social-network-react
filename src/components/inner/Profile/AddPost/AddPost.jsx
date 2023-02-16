import React from "react";
import { Field, reduxForm } from "redux-form";
import { StyledAddPostForm, StyledAddPostFormWrapper } from "./StyledAddPost";

const AddPostForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledAddPostForm onSubmit={handleSubmit}>
      <StyledAddPostFormWrapper>
        <Field
          component={"textarea"}
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
