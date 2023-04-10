import styled from "styled-components";
import { colors } from "utils/colors";

export const StyledProfileStatusContainer = styled.div`
  margin: 15px 0;
`;

export const StyledStaticStatus = styled.div`
  display: flex;
`;

export const StyledEditStatus = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  width: 300px;
  outline: none;

  border-top: 1px solid ${colors.gray2};
  border-left: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  border-right: none;
  padding-left: 8px;
`;

export const StatusText = styled.div`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  border-top: 1px solid ${colors.gray2};
  border-left: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  border-right: none;
  border: 1px solid ${colors.gray2};
  color: ${colors.gray4};
  width: fit-content;
  width: 300px;
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
