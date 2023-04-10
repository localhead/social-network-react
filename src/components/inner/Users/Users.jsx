import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledButtonBasic,
  StyledButtonSelected,
  StyledContainer,
  StyledFollowButton,
  StyledImage,
  StyledNameTitle,
  StyledPages,
  StyledStatusTitle,
  StyledUnFollowButton,
  StyledUserCard,
  StyledWideContainer,
} from "./styles";

import emptyUser from "../../../assets/img/emptyUser.png";

export const Users = (props) => {
  const {
    users,
    isFetchingFollowing,
    pageSize,
    totalUserCount,
    currentPage,
    onFollowUser,
    onUnFollowUser,
  } = props;

  let pagesCount = Math.ceil(totalUserCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  //console.log("global ", isFetchingFollowing);

  const followUserHandler = (userId) => {
    onFollowUser(userId);
  };

  const UnFollowUserHandler = (userId) => {
    onUnFollowUser(userId);
  };

  return (
    <StyledWideContainer>
      <StyledPages>
        {pages.map((number, index) => {
          return (
            <div key={index}>
              {number === currentPage ? (
                <StyledButtonSelected
                  onClick={(e) => {
                    props.onChangePage(number);
                  }}
                >
                  {number}
                </StyledButtonSelected>
              ) : (
                <StyledButtonBasic
                  onClick={(e) => {
                    props.onChangePage(number);
                  }}
                >
                  {number}
                </StyledButtonBasic>
              )}
            </div>
          );
        })}
      </StyledPages>
      <StyledContainer>
        {users.map((item) => {
          return (
            <StyledUserCard key={item.id}>
              <NavLink to={"/profile/" + item.id}>
                <StyledImage
                  src={
                    item.photos.small === null ? emptyUser : item.photos.small
                  }
                  alt="pict"
                />
              </NavLink>

              <StyledNameTitle>{item.name}</StyledNameTitle>
              <StyledStatusTitle>
                {item.status ? item.status : "без статуса"}
              </StyledStatusTitle>
              <div>{item.uniqueUrlName}</div>
              {item.followed ? (
                <StyledUnFollowButton
                  disabled={isFetchingFollowing.some((id) => id === item.id)}
                  onClick={() => {
                    UnFollowUserHandler(item.id);
                  }}
                >
                  Отписаться
                </StyledUnFollowButton>
              ) : (
                <StyledFollowButton
                  disabled={isFetchingFollowing.some((id) => id === item.id)}
                  onClick={() => {
                    followUserHandler(item.id);
                  }}
                >
                  Подписаться
                </StyledFollowButton>
              )}
            </StyledUserCard>
          );
        })}
      </StyledContainer>
    </StyledWideContainer>
  );
};
