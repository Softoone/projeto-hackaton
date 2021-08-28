let EMPRESA = [
  {nomeEmpresa: 'Ana', telefoneEmpresa: '(71)9863-6784', emailEmpresa: 'teste@teste.com',enderecoEmpresa: 'Barra', published: 'Published'},
  {nomeEmpresa: 'Brito', telefoneEmpresa: '(71)9262-6784', emailEmpresa: 'exemplo@exemplo.com', enderecoEmpresa: 'Pituba',published: 'Published'},
]
const getAll = () => {
  return EMPRESA;
};

const getById = (nomeEmpresa) => {
  if (nomeEmpresa === "") return EMPRESA
  //var filtrado = FUNCIONARIOS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = FUNCIONARIOS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  var filtrado = EMPRESA.filter((obj) => obj.nomeEmpresa.includes(nomeEmpresa) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return EMPRESA.push(data);
};

const update = (key, data) => {
  console.log(key)
  EMPRESA.forEach(function(item) {
    if (item.nomeEmpresa === key){
      item.nomeEmpresa = data.nomeEmpresa
      item.telefoneEmpresa = data.telefoneEmpresa
      item.emailEmpresa = data.emailEmpresa
      item.enderecoEmpresa = data.enderecoEmpresa
    }
  });
  return 
};

const remove = (key) => {
  return EMPRESA.splice(EMPRESA.indexOf(key), 1);
};

const removeAll = () => {
  EMPRESA=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};
