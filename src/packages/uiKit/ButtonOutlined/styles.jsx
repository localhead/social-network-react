import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  gap: 5px;
  cursor: pointer;
  border: 1px solid ${colors.gray2};
  background: transparent;
  color: ${colors.dark};
  padding: 5px 25px;

  transition: 0.3s ease;
  :hover {
    background: #ececec;
  }
`;
export const StyledIcon = styled.img`
  width: 24px;
  background: ${colors.primaryDark};
`;
