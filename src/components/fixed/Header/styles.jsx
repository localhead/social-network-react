import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledHeader = styled.div`
  background-color: ${colors.dark};
  grid-area: h;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderContainer = styled.div`
  width: 1390px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  height: 73px;
  position: relative;
`;

export const StyledLogo = styled.img`
  object-fit: contain;
  width: 160px;
  background-color: ${colors.primary};
  padding-left: 10px;
`;

export const StyledAvatarImage = styled.img`
  width: 43px;
  height: 43px;
  background-color: #ffffff;
`;

export const StyledCaretImage = styled.img`
  width: 23px;
  height: 23px;
`;

export const StyledAvatarContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledDropdown = styled.div`
  position: absolute;
  padding-right: 35px;
  padding-top: 3px;
  padding-bottom: 3px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  bottom: calc(0% - 63px);
  right: 0;
  background: ${colors.gray0};
`;
