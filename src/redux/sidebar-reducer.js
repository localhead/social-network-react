let initialState = {
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
      path: "/news",
      label: "News",
    },
    {
      path: "/music",
      label: "Music",
    },
    {
      path: "/users",
      label: "Users",
    },
    {
      path: "/settings",
      label: "Settings",
    },
  ],
};

export const sidebarReducer = (state = initialState) => {
  return state;
};
