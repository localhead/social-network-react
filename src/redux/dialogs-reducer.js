let initialState = {
  dialogsData: [
    { id: 1, name: "Valera" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Sasha" },
  ],

  messagesData: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "fuck u!" },
    { id: 3, message: "goodbye!" },
  ],

  messageTextArea: "bad cock",
};

export const dialogsReducer = (state = initialState, action) => {
  if (action.type === "UPDATE-MESSAGE-TEXT") {
    let stateCopy = { ...state };
    stateCopy.messageTextArea = action.textData;

    return stateCopy;
  } else if (action.type === "ADD-MESSAGE-TO-DIALOG") {
    const newPost = [{ id: Math.random() * 10, message: action.textData }];

    const [res] = newPost;

    let stateCopy = { ...state };
    stateCopy.messagesData = [...state.messagesData, res];

    stateCopy.messageTextArea = "";

    return stateCopy;
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
