import styled from "styled-components";

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

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const StyledUnFollowButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: rgb(228, 228, 228);
  border: 1px solid rgb(166, 166, 166);
  padding: 5px 10px;
`;

export const StyledFollowButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 5px;

  padding: 5px 10px;
`;
