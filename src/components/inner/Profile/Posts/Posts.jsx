import React from "react";

import { AddPost } from "./AddPost/AddPost";
import {
  StyledButtonContainer,
  StyledIcon,
  StyledLikesCount,
  StyledLikesCountActive,
  StyledPostContent,
  StyledPosts,
  StyledPostsContainer,
  StyledTrashIcon,
} from "./styles";

import heartImage from "../../../../assets/svgs/HeartStraight.svg";
import heartStraightWhite from "../../../../assets/svgs/HeartStraightWhite.svg";

import trashImage from "../../../../assets/svgs/Trash.svg";

export const Posts = (props) => {
  const { postsData, addPostActionCreator, togglePostLike, deletePost } = props;

  const addPostHandlerInner = (formData) => {
    addPostActionCreator(formData.postText);
  };

  const onLikeCountHandler = (index) => {
    togglePostLike(index);
  };

  const onDeleteCountHandler = (id) => {
    deletePost(id);
  };

  return (
    <StyledPosts>
      <AddPost onSubmit={addPostHandlerInner} />

      {postsData.map((item, index) => {
        return (
          <StyledPostsContainer key={item.id}>
            <StyledPostContent>{item.message}</StyledPostContent>
            {item.isLiked === true ? (
              <StyledButtonContainer>
                <StyledLikesCountActive
                  onClick={() => {
                    onLikeCountHandler(index);
                  }}
                >
                  <StyledIcon src={heartStraightWhite} alt="icon" />
                  {item.likesCount}
                </StyledLikesCountActive>
                <StyledTrashIcon
                  src={trashImage}
                  alt="icon"
                  onClick={() => {
                    onDeleteCountHandler(item.id);
                  }}
                />
              </StyledButtonContainer>
            ) : (
              <StyledButtonContainer>
                <StyledLikesCount
                  onClick={() => {
                    onLikeCountHandler(index);
                  }}
                >
                  <StyledIcon src={heartImage} alt="icon" />
                  {item.likesCount}
                </StyledLikesCount>
                <StyledTrashIcon
                  src={trashImage}
                  alt="icon"
                  onClick={() => {
                    onDeleteCountHandler(item.id);
                  }}
                />
              </StyledButtonContainer>
            )}
          </StyledPostsContainer>
        );
      })}
    </StyledPosts>
  );
};
