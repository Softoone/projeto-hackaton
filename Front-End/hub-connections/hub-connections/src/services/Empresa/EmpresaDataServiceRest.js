import http from "../../http-common";

const getAll = () => {
  return http.get("/empresa");
};
const get = id => {
  return http.get(`/empresa/${id}`);
};
const create = data => {
  return http.post("/empresa", data);
};
const update = (id, data) => {
  return http.put(`/empresa/${id}`, data);
};
const remove = id => {
  return http.delete(`/empresa/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/empresa`);
};
const findByTitle = nomeEmpresa => {
  return http.get(`/empresa?nomeEmpresa=${nomeEmpresa}`);
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

