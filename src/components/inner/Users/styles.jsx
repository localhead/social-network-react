import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const StyledButtonSelected = styled.div`
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledButtonBasic = styled.div`
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledPages = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
`;

export const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledNameTitle = styled.div`
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  width: fit-content;
  white-space: nowrap;
  width: 150px;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledStatusTitle = styled.div`
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  width: fit-content;
  white-space: nowrap;
  width: 150px;
  font-size: 12px;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 150px);
  gap: 10px;
`;

export const StyledWideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
`;

export const StyledUnFollowButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  color: ${colors.dark};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray2};
  padding: 5px 10px;
`;

export const StyledFollowButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${colors.gray2};
  background-color: ${colors.primary};
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  color: white;
  padding: 5px 10px;
`;
