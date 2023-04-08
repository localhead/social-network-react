import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinksWrapper = styled.ul`
  grid-area: n;
  text-decoration: none;
  margin-top: 10px;
  list-style-type: none;
  padding: 0px;
  border: none;
`;

export const StyledList = styled.li`
  margin-top: 3px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
