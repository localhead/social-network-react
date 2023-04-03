import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledProfileStatusContainer = styled.div`
  margin: 15px 0;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;

  border-bottom: 1px solid ${colors.gray0};
  padding-bottom: 5px;
  border-top: none;
  border-left: none;
  border-right: none;

  outline: none;

  margin: 0;

  :focus {
    outline: none;
  }
`;

export const StatusText = styled.div`
  font-size: 14px;
  white-space: pre-line;
  border: 1px solid transparent;
  padding-top: 1px;
`;
