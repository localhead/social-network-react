let initialState = {
  navigationLinks: [
    {
      path: "/profile",
      label: "Profile",
    },
    {
      path: "/dialogs",
      label: "Messages",
    },

    {
      path: "/music",
      label: "Music",
    },
    {
      path: "/users",
      label: "Users",
    },
  ],
};

export const sidebarReducer = (state = initialState) => {
  return state;
};
