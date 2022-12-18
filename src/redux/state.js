import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

let store = {
  // нижнее подчеркивание значит то, что этот стейт нельзя юзать вне этого объекта
  _state: {
    profilePage: {
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
      textAreaData: "fuck life",
    },

    dialogsPage: {
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

      messageTextArea: "",
    },

    sideBarData: {
      friendsData: [
        {
          id: 1,
          name: "Dima",
          photo:
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        },
        {
          id: 2,
          name: "Matvei",
          photo:
            "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
  },

  // нижнее подчеркивание значит то, что этот метод вызывается только внутри этого объекта
  _callSubscriber(state) {
    console.log("State changed");
  },

  // чтобы юзать стетй нужно запускать этот метод который вернет стейт, который можно перекидывать дальше
  // через пропсы
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
