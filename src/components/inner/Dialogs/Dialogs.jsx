import React from "react";

import { Navigate } from "react-router-dom";
import {
  StyledDialogsWrapper,
  StyledMessage,
  StyledMessages,
  StyledSendMessageForm,
  StyledUserProfileDialog,
  StyledUsersList,
} from "./StyledDialogs";

export const Dialogs = (props) => {
  const { messagesData, dialogsData, messageTextArea } =
    props.props.dialogsPage;
  const { onMessageChange, onSendMessage } = props;

  const sendMessageLink = React.createRef();

  const isAuthorized = props.props.authData.isAuthorized;

  const sendMessageHandlerInner = () => {
    const text = messageTextArea;
    onSendMessage(text);
  };

  const onMessageChangeInner = () => {
    const text = sendMessageLink.current.value;

    onMessageChange(text);
  };
  console.log(isAuthorized);

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
          <textarea
            ref={sendMessageLink}
            onChange={onMessageChangeInner}
            value={messageTextArea}
          ></textarea>
          <button onClick={sendMessageHandlerInner}>Send Message</button>
        </StyledSendMessageForm>
      </StyledDialogsWrapper>
    </>
  );
};
