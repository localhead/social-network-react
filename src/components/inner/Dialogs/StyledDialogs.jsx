import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDialogsWrapper = styled.div`
  display: grid;
  padding: 0px;

  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    "d h"
    "d s";
`;

export const StyledUsersList = styled.div`
  background-color: rgba(216, 216, 216, 0.67);
  grid-area: d;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledMessages = styled.div`
  grid-area: h;
  height: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledSendMessageForm = styled.div`
  grid-area: s;
`;

export const StyledUserProfileDialog = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const StyledMessage = styled.div`
  grid-area: h;
`;
