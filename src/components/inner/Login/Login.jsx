import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import {
  StyledErrorMessage,
  StyledLoginForm,
  StyledLoginFromWrapper,
  StyledLoginWrapper,
  StyledTitle,
} from "./styles";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <StyledLoginFromWrapper>
        <Field placeholder="Введите Имя" component={"input"} name={"email"} />
        <Field
          placeholder="Password"
          component={"input"}
          name={"password"}
          type={"password"}
        />
        <Field type="checkbox" component={"input"} name={"rememberMe"} />
        {/* Error prop will come withing react-form and will be triggered if we catch an error in reducer thunk */}
        <StyledErrorMessage>{props.error}</StyledErrorMessage>
        <button>Login</button>
      </StyledLoginFromWrapper>
    </StyledLoginForm>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData.email, formData.password, formData.rememberMe);
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
