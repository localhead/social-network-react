import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "68779c10-1e15-43dd-9b4e-dfae49a44d16" },
});
/* 



*/
export const usersAPI = {
  getUserData(number, pageSize) {
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

const mock = {
  aboutMe: "lool",
  lookingForAJob: true,
  lookingForAJobDescription: "test",
  fullName: "rrr",
  contacts: {
    github: "https://mail.ru/",
    vk: "https://mail.ru/",
    facebook: "https://mail.ru/",
    instagram: "https://mail.ru/",
    twitter: "https://mail.ru/",
    website: "https://mail.ru/",
    youtube: "https://mail.ru/",
    mainLink: "https://mail.ru/",
  },
};

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
        return response;
      });
  },
  savePhotoApi(file) {
    const formData = new FormData();
    formData.append("image", file);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfileDataApi(data) {
    console.log(data);
    return instance.put(`profile`, data).then((response) => {
      return response;
    });
  },
};
