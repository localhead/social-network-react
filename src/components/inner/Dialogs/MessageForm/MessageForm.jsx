import { Field, reduxForm } from "redux-form";
import React from "react";
import {
  StyledMessageCustomForm,
  StyledMessageCustomFormWrapper,
} from "./StyledMessageForm";
import { requiredField } from "utils/validators";
import { TextArea } from "components/common/FormsControl/FormsControl";

const MessageCustomForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledMessageCustomForm onSubmit={handleSubmit}>
      <StyledMessageCustomFormWrapper>
        <Field
          component={TextArea}
          placeholder="Введите текст"
          name={"messageText"}
          validate={[requiredField]}
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
