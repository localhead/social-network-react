import React from "react";

import { DialogItem } from "./DialogItem";

import classes from "./Dialogs.module.css";
import { MessageItem } from "./MessageItem";

export const Dialogs = (props) => {
  const { messagesData, dialogsData } = props.state;

  const sendMessageLink = React.createRef();

  const sendMessageHandler = () => {
    const text = sendMessageLink.current.value;
    alert(text);
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
        <textarea ref={sendMessageLink}></textarea>
        <button onClick={sendMessageHandler}>Send Message</button>
      </div>
    </div>
  );
};
