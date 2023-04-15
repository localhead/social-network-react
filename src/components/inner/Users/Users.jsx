import React, { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledArrow,
  StyledButtonBasic,
  StyledButtonSelected,
  StyledContainer,
  StyledFollowButton,
  StyledImage,
  StyledNameTitle,
  StyledPages,
  StyledPagesNumber,
  StyledStatusTitle,
  StyledUnFollowButton,
  StyledUserCard,
  StyledWideContainer,
} from "./styles";

import emptyUser from "../../../assets/img/emptyUser.png";

import arrowLeft from "../../../assets/svgs/arrow-left.svg";
import arrowRight from "../../../assets/svgs/arrow-right.svg";

const _Users = (props) => {
  const {
    users,
    isFetchingFollowing,
    pageSize,
    totalUserCount,
    currentPage,
    onFollowUser,
    onUnFollowUser,
  } = props;

  const pages = useMemo(() => {
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalUserCount, pageSize]);

  const followUserHandler = (userId) => {
    onFollowUser(userId);
  };

  const UnFollowUserHandler = (userId) => {
    onUnFollowUser(userId);
  };

  const onLeftArrowClickHandler = () => {
    currentPage - 1 !== 0 && props.onChangePage(currentPage - 1);
  };

  const onRightArrowClickHandler = () => {
    currentPage + 1 < pages.length && props.onChangePage(currentPage + 1);
  };

  return (
    <StyledWideContainer>
      <StyledPages>
        <StyledArrow
          src={arrowLeft}
          alt="arrowLeft"
          onClick={onLeftArrowClickHandler}
        />
        {pages
          .slice(
            currentPage <= 5 ? 0 : currentPage - 6,
            currentPage <= 5 ? 10 : currentPage + 5
          )
          .map((number, index) => {
            return (
              <StyledPagesNumber key={index}>
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
              </StyledPagesNumber>
            );
          })}
        <StyledArrow
          src={arrowRight}
          alt="arrowLeft"
          onClick={onRightArrowClickHandler}
        />
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

export const Users = memo(_Users);
