import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  transition: all 0.5s;
`;

export const StyledXImage = styled.img`
  z-index: 2;
  right: 32.5%;
  top: 18%;
  position: absolute;
  background: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  left: 35%;
  top: 30%;
  z-index: 4;
`;
export const StyledModalContent = styled.div`
  position: absolute;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  height: 63%;
  display: flex;
  transition: all 0.5s;
  padding: 35px;
`;
