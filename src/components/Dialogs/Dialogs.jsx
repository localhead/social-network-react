import React from "react";

import { DialogItem } from "./DialogItem";
import { MessageItem } from "./MessageItem";

import classes from "./Dialogs.module.css";
import { addMessageToDialog, updateMessageText } from "redux/dialogs-reducer";

export const Dialogs = (props) => {
  const { messagesData, dialogsData, messageTextArea } = props.state;
  const dispatch = props.dispatch;

  const sendMessageLink = React.createRef();

  const sendMessageHandler = () => {
    const text = messageTextArea;
    console.log(text, messageTextArea);
    dispatch(addMessageToDialog(text));
  };

  const messageChangeText = () => {
    const text = sendMessageLink.current.value;

    dispatch(updateMessageText(text));
  };

  return (
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
          onChange={messageChangeText}
          value={messageTextArea}
        ></textarea>
        <button onClick={sendMessageHandler}>Send Message</button>
      </div>
    </div>
  );
};
