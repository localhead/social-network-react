import React from "react";
import { Field, reduxForm } from "redux-form";

import {
  StyledLoginForm,
  StyledLoginFromWrapper,
  StyledLoginWrapper,
  StyledTitle,
} from "./StyledLogin";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <StyledLoginFromWrapper>
        <Field placeholder="Введите Имя" component={"input"} name={"name"} />
        <Field placeholder="Password" component={"input"} name={"password"} />
        <Field type="checkbox" component={"input"} name={"rememberMe"} />
        <button>Login</button>
      </StyledLoginFromWrapper>
    </StyledLoginForm>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

export const Login = (props) => {
  // Getting data from Redux
  // const stateReduxForm = props.form;
  // console.log(stateReduxForm);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <StyledLoginWrapper>
        <StyledTitle>Войти в систему</StyledTitle>
        <LoginReduxForm onSubmit={onSubmit} />
      </StyledLoginWrapper>
    </>
  );
};
