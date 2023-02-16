import React from "react";

import {
  StyledLikesCount,
  StyledPostAvatar,
  StyledPostContent,
} from "./StyledPost";

export const Post = function (props) {
  return (
    <StyledPostContent key={props.id}>
      <StyledPostAvatar src={props.image} alt="avatar" />
      {props.message}
      <StyledLikesCount>{props.likesCount} likes</StyledLikesCount>
    </StyledPostContent>
  );
};
