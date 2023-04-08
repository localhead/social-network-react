import { Field } from "redux-form";
import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledAddPostForm = styled.form``;

export const StyledAddPostFormWrapper = styled.div``;

export const StyledField = styled(Field)`
  width: 100%;
  border: 1px solid ${colors.gray1};
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  padding: 5px;
`;
