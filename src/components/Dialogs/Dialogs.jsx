import React from "react";

import { DialogItem } from "./DialogItem";
import { MessageItem } from "./MessageItem";

import classes from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";

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
      <div className={classes.dialogs}>
        <div className={classes["users-list"]}>
          {dialogsData.map((item) => {
            return <DialogItem key={item.id} name={item.name} />;
          })}
        </div>

        <div className={classes.messages}>
          {messagesData.map((item) => {
            return <MessageItem key={item.id} message={item.message} />;
          })}
        </div>

        <div className={classes["send-message-content"]}>
          <textarea
            ref={sendMessageLink}
            onChange={onMessageChangeInner}
            value={messageTextArea}
          ></textarea>
          <button onClick={sendMessageHandlerInner}>Send Message</button>
        </div>
      </div>
    </>
  );
};
