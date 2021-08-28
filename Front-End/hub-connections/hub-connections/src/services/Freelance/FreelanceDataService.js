let FREELANCE = [
  {nomeFreelance: 'Ana', telefoneFreelance: '(71)9863-6784', emailFreelance: 'teste@teste.com',enderecoFreelance: 'Barra', published: 'Published'},
  {nomeFreelance: 'Brito', telefoneFreelance: '(71)9262-6784', emailFreelance: 'exemplo@exemplo.com', enderecoFreelance: 'Pituba', published: 'Published'},
]
const getAll = () => {
  return FREELANCE;
};

const getById = (nomeFreelance) => {
  if (nomeFreelance === "") return FREELANCE
  //var filtrado = FUNCIONARIOS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = FUNCIONARIOS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  var filtrado = FREELANCE.filter((obj) => obj.nomeFreelance.includes(nomeFreelance) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return FREELANCE.push(data);
};

const update = (key, data) => {
  console.log(key)
  FREELANCE.forEach(function(item) {
    if (item.nomeFreelance === key){
      item.nomeFreelance = data.nomeFreelance
      item.telefoneFreelance = data.telefoneFreelance
      item.emailFreelance = data.emailFreelance
      item.enderecoFreelance = data.enderecoFreelance
    }
  });
  return 
};

const remove = (key) => {
  return FREELANCE.splice(FREELANCE.indexOf(key), 1);
};

const removeAll = () => {
  FREELANCE=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};
