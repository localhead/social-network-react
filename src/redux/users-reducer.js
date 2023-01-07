let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 1,
  currentPage: 0,
  isFetching: false,
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
    const res = { ...state, users: [...action.users] };

    return res;
  } else if (action.type === "SET-PAGE") {
    const res = { ...state, currentPage: action.page };

    return res;
  } else if (action.type === "SET-USERS-COUNT") {
    const res = { ...state, totalUserCount: action.count };

    return res;
  } else if (action.type === "SET-FETCHING") {
    // console.log(action.value);

    return { ...state, isFetching: action.value };
  }
  return state;
};

export const followUser = (userId) => {
  return {
    type: "FOLLOW-USER",
    userId: userId,
  };
};

export const unFollowUser = (userId) => {
  return {
    type: "UNFOLLOW-USER",
    userId: userId,
  };
};

export const setUsers = (users) => {
  return {
    type: "SET-USERS",
    users: users,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: "SET-PAGE",
    page: page,
  };
};

export const setTotalCount = (count) => {
  return {
    type: "SET-USERS-COUNT",
    count: count,
  };
};

export const setFetching = (value) => {
  return {
    type: "SET-FETCHING",
    value: value,
  };
};
