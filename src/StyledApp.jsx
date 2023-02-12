import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: grid;

  grid-template-areas:
    "h h"
    "n d";

  grid-template-columns: 2fr 10fr;
  grid-template-rows: 60px 2fr;
`;

export const StyledAppInnerWrapper = styled.div`
  grid-area: d;
`;
