export const profileReducer = (state, action) => {
  console.log(state);
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

    state.postsData.push(res);

    state.textAreaData = "";

    return state;
  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    state.textAreaData = action.textData;
    return state;
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
