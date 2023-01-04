let initialState = {
  postsData: [
    {
      id: "1",
      message: "fuck you",
      likesCount: "5",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: "2",
      message: "good boy",
      likesCount: "33",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: "3",
      message: "bad life",
      likesCount: "12",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
  ],
  textAreaValue: "fuck life",
};

export const profileReducer = (state = initialState, action) => {
  if (action.type === "ADD-POST") {
    const newPost = [
      {
        id: Math.random() * 10,
        message: action.textData,
        likesCount: "10",
        image:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
      },
    ];
    const [res] = newPost;

    let stateCopy = { ...state };
    stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push(res);

    stateCopy.textAreaValue = "";

    return stateCopy;
  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    let stateCopy = { ...state };

    stateCopy.textAreaValue = action.textData;
    return stateCopy;
  }
  return state;
};

export const addPostActionCreator = (text) => {
  return {
    type: "ADD-POST",
    textData: text,
  };
};

export const updateNewPostText = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    textData: text,
  };
};
