import styled from "styled-components";

export const StyledFriendsListWrapper = styled.div`
  margin-top: 35px;
`;

export const StyledFriendsListTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StyledFriendsListItems = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
  list-style-type: none;
  padding: 0px;
  border: none;
`;

export const StyledFriendsListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StyledFriendsListPhoto = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
