import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #cbcfff;
  grid-area: h;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.img`
  object-fit: contain;
  width: 80px;
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  color: black;
  background-color: rgb(222, 222, 222);
  font-size: 15px;
  border: 1px solid rgb(96, 96, 96);
  padding: 5px 15px;
  margin: 0;
  border-radius: 5px;

  :hover {
    transition: 0.3s all;
    background-color: rgb(72, 72, 72);
    color: white;
  }
`;
