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
  padding: 15px;
  background-color: rgba(216, 216, 216, 0.67);
  grid-area: d;
`;

export const StyledMessages = styled.div`
  grid-area: h;
  height: 100%;
`;

export const StyledSendMessageForm = styled.div`
  grid-area: s;
`;

export const StyledUserProfileDialog = styled(Link)`
  margin-top: 10px;
`;

export const StyledMessage = styled.div`
  grid-area: h;
  height: 100%;
`;
