export const dialogsReducer = (state, action) => {
  if (action.type === "UPDATE-MESSAGE-TEXT") {
    state.messageTextArea = action.textData;

    return state;
  } else if ((action.type = "ADD-MESSAGE-TO-DIALOG")) {
    const newPost = [{ id: Math.random() * 10, message: action.textData }];

    const [res] = newPost;
    state.messagesData.push(res);

    state.messageTextArea = "";
    return state;
  }
  return state;
};

export const updateMessageText = (text) => {
  return {
    type: "UPDATE-MESSAGE-TEXT",
    textData: text,
  };
};

export const addMessageToDialog = (text) => {
  return {
    type: "ADD-MESSAGE-TO-DIALOG",
    textData: text,
  };
};
