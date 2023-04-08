import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledButtonBasic,
  StyledButtonSelected,
  StyledContainer,
  StyledFollowButton,
  StyledImage,
  StyledPages,
  StyledUnFollowButton,
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
    <StyledContainer>
      <StyledPages>
        {pages.map((number, index) => {
          return (
            <>
              {number === currentPage ? (
                <StyledButtonSelected
                  key={index}
                  onClick={(e) => {
                    props.onChangePage(number);
                  }}
                >
                  {number}
                </StyledButtonSelected>
              ) : (
                <StyledButtonBasic
                  key={index}
                  onClick={(e) => {
                    props.onChangePage(number);
                  }}
                >
                  {number}
                </StyledButtonBasic>
              )}
            </>
          );
        })}
      </StyledPages>

      {users.map((item) => {
        return (
          <div key={item.id}>
            <NavLink to={"/profile/" + item.id}>
              <StyledImage
                src={item.photos.small === null ? emptyUser : item.photos.small}
                alt="pict"
              />
            </NavLink>

            <div>{item.name}</div>
            <div>{item.status}</div>
            <div>{item.uniqueUrlName}</div>
            {item.followed ? (
              <StyledUnFollowButton
                disabled={isFetchingFollowing.some((id) => id === item.id)}
                onClick={() => {
                  UnFollowUserHandler(item.id);
                }}
              >
                Unfollow
              </StyledUnFollowButton>
            ) : (
              <StyledFollowButton
                disabled={isFetchingFollowing.some((id) => id === item.id)}
                onClick={() => {
                  followUserHandler(item.id);
                }}
              >
                Follow
              </StyledFollowButton>
            )}
          </div>
        );
      })}
    </StyledContainer>
  );
};
