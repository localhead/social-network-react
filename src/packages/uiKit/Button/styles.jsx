import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  gap: 5px;
  cursor: pointer;
  border: none;
  background: none;
`;
export const StyledIcon = styled.img`
  width: 24px;
  background: ${colors.primaryDark};
`;
