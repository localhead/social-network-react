import React from "react";
import {
  StyledFriendsListItem,
  StyledFriendsListItems,
  StyledFriendsListPhoto,
  StyledFriendsListTitle,
  StyledFriendsListWrapper,
} from "./StyledFriendsList";

export const FriendsList = (props) => {
  const { friendsData } = props;

  return (
    <StyledFriendsListWrapper>
      <StyledFriendsListTitle>Friends</StyledFriendsListTitle>
      <StyledFriendsListItems>
        {friendsData.map((item, index) => {
          return (
            <StyledFriendsListItem key={index}>
              <StyledFriendsListPhoto src={item.photo} alt="avatar" />
              {item.name}
            </StyledFriendsListItem>
          );
        })}
      </StyledFriendsListItems>
    </StyledFriendsListWrapper>
  );
};
