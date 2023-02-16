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
};

export const dialogsReducer = (state = initialState, action) => {
  if (action.type === "ADD-MESSAGE-TO-DIALOG") {
    const newMessage = [{ id: Math.random() * 10, message: action.textData }];

    const [res] = newMessage;

    let stateCopy = { ...state };
    stateCopy.messagesData = [...state.messagesData, res];

    return stateCopy;
  }
  return state;
};

export const addMessageToDialog = (text) => {
  return {
    type: "ADD-MESSAGE-TO-DIALOG",
    textData: text,
  };
};
