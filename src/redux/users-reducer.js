import { usersAPI } from "api/API";

let initialState = {
  users: [],
  pageSize: 10,
  totalUserCount: 1,
  currentPage: 0,
  isFetching: false,
  isFetchingFollowing: [],
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
    return { ...state, isFetching: action.value };
  } else if (action.type === "SET-FETCHING-FOLLOWING") {
    return {
      ...state,

      isFetchingFollowing: action.isFetching
        ? [...state.isFetchingFollowing, action.userId]
        : state.isFetchingFollowing.filter((id) => id !== action.userId),
    };
  }
  return state;
};

export const setFollowUser = (userId) => {
  return {
    type: "FOLLOW-USER",
    userId: userId,
  };
};

export const setUnFollowUser = (userId) => {
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

export const setFetchingFollowing = (userId, isFetching) => {
  return {
    type: "SET-FETCHING-FOLLOWING",

    userId: userId,
    isFetching: isFetching,
  };
};
/* 



*/
// Thunks
export const getUsersOnPageThunk = (number, pageSize) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(number));

    usersAPI.getUsersData(number, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setFetching(false));
    });
  };
};

export const getTotalUsersCountThunk = () => {
  return (dispatch) => {
    usersAPI.getAllUsersData().then((data) => {
      //console.log(response);
      dispatch(setTotalCount(Math.ceil(data.totalCount / 70)));
      dispatch(setFetching(false));
    });
  };
};

export const followUserThunk = (userId) => {
  return (dispatch) => {
    dispatch(setFetchingFollowing(true, userId));

    usersAPI.followUser(userId).then((response) => {
      if (response.data.resultCode !== 1) {
        dispatch(setFollowUser(userId));
        dispatch(setFetchingFollowing(false, userId));
      }
    });
  };
};

export const unFollowUserThunk = (userId) => {
  return (dispatch) => {
    dispatch(setFetchingFollowing(true, userId));

    usersAPI.unFollowUser(userId).then((response) => {
      if (response.data.resultCode !== 1) {
        dispatch(setUnFollowUser(userId));
        dispatch(setFetchingFollowing(false, userId));
      }
    });
  };
};
