import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "68779c10-1e15-43dd-9b4e-dfae49a44d16" },
});

export const getUserData = (number, pageSize) => {
  return instance
    .get(`users?page=${number}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const getAllUsersData = () => {
  return instance.get(`users`).then((response) => {
    return response.data;
  });
};

export const getUserAuthInfo = () => {
  return axios
    .get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    .then((response) => {
      return response;
    });
};
