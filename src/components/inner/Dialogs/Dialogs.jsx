import React from "react";

import { Navigate } from "react-router-dom";
import { MessageForm } from "./MessageForm/MessageForm";
import {
  StyledDialogsWrapper,
  StyledMessage,
  StyledMessages,
  StyledSendMessageForm,
  StyledUserProfileDialog,
  StyledUsersList,
} from "./StyledDialogs";

export const Dialogs = (props) => {
  const { messagesData, dialogsData } = props.props.dialogsPage;
  const { onSendMessage } = props;

  const isAuthorized = props.props.authData.isAuthorized;

  const sendMessageHandlerInner = (formData) => {
    onSendMessage(formData.messageText);
  };

  return (
    <>
      {!isAuthorized && <Navigate to="/login" />}
      <StyledDialogsWrapper>
        <StyledUsersList>
          {dialogsData.map((item) => {
            return (
              <StyledUserProfileDialog to={"/dialogs/" + item.id} key={item.id}>
                {item.name}
              </StyledUserProfileDialog>
            );
          })}
        </StyledUsersList>

        <StyledMessages>
          {messagesData.map((item) => {
            return <StyledMessage key={item.id}>{item.message}</StyledMessage>;
          })}
        </StyledMessages>

        <StyledSendMessageForm>
          <MessageForm onSubmit={sendMessageHandlerInner} />
        </StyledSendMessageForm>
      </StyledDialogsWrapper>
    </>
  );
};
