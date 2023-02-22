import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "68779c10-1e15-43dd-9b4e-dfae49a44d16" },
});
/* 



*/
export const usersAPI = {
  getUsersData(number, pageSize) {
    return instance
      .get(`users?page=${number}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getAllUsersData() {
    return instance.get(`users`).then((response) => {
      return response.data;
    });
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response;
    });
  },
  unFollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response;
    });
  },
};
/* 





*/
export const authAPI = {
  getUserAuthInfo() {
    return instance.get(`auth/me`).then((response) => {
      return response;
    });
  },
  loginIn(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        return response;
      });
  },
  logOut() {
    console.log("here is response");
    return instance.delete(`auth/login`).then((response) => {
      return response;
    });
  },
};
/* 



*/
export const profileAPI = {
  setProfileData(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response;
    });
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response;
    });
  },
  setAuthUserStatusAPI(statusText) {
    return instance
      .put(`profile/status`, { status: statusText })
      .then((response) => {
        console.log(response);
        return response;
      });
  },
};
