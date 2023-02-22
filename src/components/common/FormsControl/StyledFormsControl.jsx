import styled, { css } from "styled-components";

export const StyledTextarea = styled.textarea`
  outline: none;
  border-radius: 10px;
  padding: 5px 5px;
  width: 250px;
  min-width: 0;

  ${(isError) =>
    isError &&
    css`
      border-color: red;
    `}
`;
