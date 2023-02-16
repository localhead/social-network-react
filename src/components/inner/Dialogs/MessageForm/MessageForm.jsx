import { Field, reduxForm } from "redux-form";
import React from "react";
import {
  StyledMessageCustomForm,
  StyledMessageCustomFormWrapper,
} from "./StyledMessageForm";

const MessageCustomForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledMessageCustomForm onSubmit={handleSubmit}>
      <StyledMessageCustomFormWrapper>
        <Field
          component={"textarea"}
          placeholder="Введите текст"
          name={"messageText"}
        />
        <button>Отправить</button>
      </StyledMessageCustomFormWrapper>
    </StyledMessageCustomForm>
  );
};

const MessageReduxForm = reduxForm({
  form: "sss",
})(MessageCustomForm);

export const MessageForm = (props) => {
  const { onSubmit } = props;
  return <MessageReduxForm onSubmit={onSubmit} />;
};
