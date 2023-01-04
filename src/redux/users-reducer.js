let initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  if (action.type === "UNFOLLOW-USER") {
    let stateCopy = {
      ...state,

      users: state.users.map((u) => {
        if (u.id === action.userId) {
          return { ...u, followed: false };
        }
        return u;
      }),
    };
    return stateCopy;
  } else if (action.type === "FOLLOW-USER") {
    let stateCopy = {
      ...state,

      users: state.users.map((u) => {
        if (u.id === action.userId) {
          return { ...u, followed: true };
        }
        return u;
      }),
    };
    return stateCopy;
  } else if (action.type === "SET-USERS") {
    console.log(action.users);
    const res = { users: [...action.users] };
    console.log(res);
    return res;
  }
  return state;
};

export const followUserAction = (userId) => {
  return {
    type: "FOLLOW-USER",
    userId: userId,
  };
};

export const unfollowUserAction = (userId) => {
  return {
    type: "UNFOLLOW-USER",
    userId: userId,
  };
};

export const setUsersAction = (users) => {
  return {
    type: "SET-USERS",
    users: users,
  };
};
