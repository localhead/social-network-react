import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledPosts = styled.div`
  grid-area: c;
`;

export const StyledPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const StyledPostContent = styled.div`
  border: 1px solid ${colors.gray2};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px;
`;

export const StyledPostAvatar = styled.img`
  height: 50px;
  width: 50px;
`;

export const StyledIcon = styled.img``;

export const StyledTrashIcon = styled.img`
  border: 1px solid ${colors.gray2};
  height: fit-content;
  padding: 3px;

  cursor: pointer;

  transition: 0.3s ease;
  :hover {
    background: #d0d0d0;
    border: 1px solid ${colors.dark};
  }
`;

export const StyledLikesCount = styled.div`
  background-color: rgb(255, 255, 255);

  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid ${colors.gray2};
  width: fit-content;
  padding: 5px;

  cursor: pointer;
`;

export const StyledLikesCountActive = styled.div`
  background-color: rgb(217, 119, 119);

  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid ${colors.gray5};
  width: fit-content;
  padding: 5px;

  cursor: pointer;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
