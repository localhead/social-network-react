import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledContainer = styled.button`
  font-family: "Montserrat", sans-serif;
  gap: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  background: ${colors.primary};
  color: white;
  padding: 5px 25px;
  display: flex;
  align-items: center;

  transition: 0.3s ease;
  :hover {
    background: ${colors.primaryDark};
  }
`;
export const StyledIcon = styled.img`
  width: 24px;
  background: ${colors.primaryDark};
`;
