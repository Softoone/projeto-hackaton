import http from "./http-common";

export const getUsers = () => {
  return http?.get(`/v1/usuario`);
};

export const getProfiles = () => {
  return http.get("/v1/perfil");
};

export const getUserById = (userId) => {
  return http?.get(`/v1/usuario/${userId}`);
};

export const deleteUser = (userId) => {
  return http?.delete(`/usuario/${userId}`);
};

export const updateUserData = (userId, userData) => {
  return http?.put(`/usuario/${userId}`, userData);
};

export const getUserByUsersName = (username) => {
  return http?.get(`/usuario?username=${username}`);
};

/* export const filter = (name) => {
  if (name === "") return Users;
  var filtrado = Users.filter((obj) => obj.name.includes(name));
  return filtrado;
}; */
