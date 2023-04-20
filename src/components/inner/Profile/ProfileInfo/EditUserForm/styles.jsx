import { Field } from "redux-form";
import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledEditUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledFormItem = styled.div`
  display: flex;
`;

export const StyledTitle = styled.b`
  padding-right: 15px;
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  min-width: 0;
`;

export const StyledContactsTitle = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid ${colors.gray1};
  padding-bottom: 5px;
`;
