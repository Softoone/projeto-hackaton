import http from "../../http-common";

const getAll = () => {
  return http.get("/freelance");
};
const get = id => {
  return http.get(`/freelance/${id}`);
};
const create = data => {
  return http.post("/freelance", data);
};
const update = (id, data) => {
  return http.put(`/freelance/${id}`, data);
};
const remove = id => {
  return http.delete(`/freelance/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/freelance`);
};
const findByTitle = nomeFreelance => {
  return http.get(`/freelance?nomeFreelance=${nomeFreelance}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
}
export default exportedObject