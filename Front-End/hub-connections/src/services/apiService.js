import http from "./http-common";

export const getUsers = () => {
  return http?.get(`/usuario/`);
};

export const getUserById = (userId) => {
  return http?.get(`/usuario/${userId}`);
};

export const getUserByUsersName = (username) => {
  return http?.get(`/usuario?username=${username}`);
};

export const deleteUser = (userId) => {
  return http?.delete(`/usuario/${userId}`);
};

export const updateUserData = (userId, userData) => {
  return http?.put(`/usuario/${userId}`, userData);
};
