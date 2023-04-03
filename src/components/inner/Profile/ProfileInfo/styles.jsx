import styled from "styled-components";

export const StyledProfileInfoWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const StyledProfileName = styled.div`
  font-size: 26px;
  font-weight: 500;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const StyledAvatar = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
`;

export const StyledEmptyAvatar = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
  background: #b6b5b5;
  font-size: 10px;
  color: red;
`;
