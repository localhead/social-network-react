import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledProfileInfoWrapper = styled.div`
  display: grid;
  margin-top: 15px;
  grid-template-areas:
    "a i"
    ". p";

  justify-content: start;
`;

export const StyledInputPhoto = styled.input``;

export const StyledInfoContainer = styled.div`
  grid-area: i;
  min-width: 0;
  margin-left: 15px;
`;

export const StyledPostsContainer = styled.div`
  grid-area: p;
  min-width: 0;
  margin-left: 15px;
`;

export const StyledProfileName = styled.div`
  font-size: 26px;
  font-weight: 500;
`;

export const StyledWorkInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledContactsTitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.gray3};
`;

export const StyledWorkStatusTitle = styled.div`
  font-size: 18;
  font-weight: 500;
`;

export const StyledIcon = styled.img``;

export const StyledWorkStatus = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const StyledContactEmptyTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.gray2};
`;

export const StyledProfileContacts = styled.div`
  border-top: 1px solid ${colors.gray1};
  justify-content: space-between;
  display: grid;

  padding: 15px 10px 18px;
`;

export const StyledContactLink = styled.a`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;

  color: ${colors.primary};
`;

export const StyledProfileContactItem = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledAvatar = styled.img`
  object-fit: cover;

  height: 300px;
  grid-area: a;
`;

export const StyledEmptyAvatar = styled.img`
  object-fit: cover;

  height: 300px;
  background: #b6b5b5;
  font-size: 10px;
  color: red;
  grid-area: a;
`;
