import React, { useState } from "react";
import ClienteDataService from "../../services/Empresa/EmpresaDataServiceRest";
import Header from '../Header'

const AddCliente = () => {
  const initialClienteState = {
    id: null,
    cargoFreelance:"",
    servicoFreelance:"",
    especialidadeFreelance:"",
    enderecoFreelance:"",
    cidadeFreelance:"",
    cepFreelance:"",
    nomeFreelance:"",
    sobrenomeFreelance:"",
    emailFreelance:"",
    telefoneFreelance:"",
    paisFreelance:"",
    dataNascimentoFreelance:"",
    meiFreelance:"",
    cpfFreelance:"",    
    
    dataInicio: "",
    dataConsulta: "",
  };
  const [Cliente, setCliente] = useState(initialClienteState);
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCliente({ ...Cliente, [name]: value });
  };

  const saveCliente = () => {
    var data = {
      dataInicio: Cliente.dataInicio,
      dataConsulta: Cliente.dataConsulta,
      
      emailFreelance: Cliente.emailFreelance,
      nomeFreelance: Cliente.nomeFreelance,
      sobrenomeFreelance: Cliente.sobrenomeFreelance,
      telefoneFreelance: Cliente.telefoneFreelance,
      dataNascimentoFreelance: Cliente.dataNascimentoFreelance,
      cargoFreelance: Cliente.cargoFreelance,
      servicoFreelance: Cliente.servicoFreelance,
      especialidadeFreelance: Cliente.especialidadeFreelance,
      enderecoFreelance: Cliente.enderecoFreelance,
      cidadeFreelance: Cliente.cidadeFreelance,
      cepFreelance: Cliente.cepFreelance,
      paisFreelance: Cliente.paisFreelance,
      meiFreelance: Cliente.meiFreelance,
      cpfFreelance: Cliente.cpfFreelance,
    };
    ClienteDataService.create(data)
      .then(response => {
        setCliente({
          emailFreelance: response.data.emailFreelance,
          emailConsultor: response.data.emailFreelance,
          nomeFreelance: response.data.nomeFreelance,
          sobrenomeFreelance: response.data.sobrenomeFreelance,
          telefoneFreelance: response.data.telefoneFreelance,
          dataNascimentoFreelance: response.data.dataNascimentoFreelance,
      
          cargoFreelance: response.data.cargoFreelance,
          servicoFreelance: response.data.servicoFreelance,
          especialidadeFreelance: response.data.especialidadeFreelance,
          enderecoFreelance: response.data.enderecoFreelance,
          cidadeFreelance: response.data.cidadeFreelance,
          cepFreelance: response.data.cepFreelance,
          paisFreelance: response.data.paisFreelance,
          meiFreelance: response.data.meiFreelance,
          cpfFreelance: response.data.cpfFreelance,

          dataInicio: response.data.dataInicio,
          dataConsulta: response.data.dataConsulta,
      
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCliente = () => {
    setCliente(initialClienteState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Header />

      {submitted ? (
        <div className="text-center">
          <h4 className="">Cadastrado com sucesso!</h4>
          <button className="btn btn-success" onClick={newCliente}>
            Adicionar
          </button>
        </div>
      ) : (

        <div id="contents" className="form">
          <div className="col-sm text-center">
            <h1><dt>Cadastro do Freelance</dt></h1>
          </div>

          <div className="form-group">
            <label htmlFor="nomeFreelance">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nomeFreelance"
              required
              value={Cliente.nomeFreelance}
              onChange={handleInputChange}
              name="nomeFreelance"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sobrenomeFreelance">Sobrenome</label>
            <input
              type="text"
              className="form-control"
              id="sobrenomeFreelance"
              required
              value={Cliente.sobrenomeFreelance}
              onChange={handleInputChange}
              name="sobrenomeFreelance"
            />
          </div>
           <div className="form-group">
            <label htmlFor="emailFreelance">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="emailFreelance"
              required
              value={Cliente.emailFreelance}
              onChange={handleInputChange}
              name="emailFreelance"
            />
          </div>
           <div className="form-group">
            <label htmlFor="telefoneFreelance">Telefone</label>
            <input
              type="text"
              className="form-control"
              id="telefoneFreelance"
              required
              value={Cliente.telefoneFreelance}
              onChange={handleInputChange}
              name="telefoneFreelance"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dataNascimento">Data Nascimento</label>
            <input
              type="text"
              className="form-control"
              id="dataNascimento"
              required
              value={Cliente.dataNascimento}
              onChange={handleInputChange}
              name="dataNascimentoFreelancer"
            />
          </div>
           <div className="form-group">
            <label htmlFor="cargoFreelance">Cargo</label>
            <input
              type="text"
              className="form-control"
              id="cargoFreelance"
              required
              value={Cliente.cargoFreelance}
              onChange={handleInputChange}
              name="cargoFreelance"
            />
          </div> 
          <div className="form-group">
            <label htmlFor="servicoFreelance">Servico</label>
            <input
              type="text"
              className="form-control"
              id="servicoFreelance"
              required
              value={Cliente.servicoFreelance}
              onChange={handleInputChange}
              name="servicoFreelance"
            />
          </div>
          <div className="form-group">
            <label htmlFor="especialidadeFreelancer">Especialidade</label>
            <input
              type="text"
              className="form-control"
              id="especialidadeFreelancer"
              required
              value={Cliente.especialidadeFreelancer}
              onChange={handleInputChange}
              name="especialidadeFreelancer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="enderecoFreelancer">Endereco</label>
            <input
              type="text"
              className="form-control"
              id="enderecoFreelancer"
              required
              value={Cliente.enderecoFreelancer}
              onChange={handleInputChange}
              name="enderecoFreelancer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cidadeFreelancer">Cidade</label>
            <input
              type="text"
              className="form-control"
              id="cidadeFreelancer"
              required
              value={Cliente.cidadeFreelancer}
              onChange={handleInputChange}
              name="cidadeFreelancer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cepFreelancer">CEP</label>
            <input
              type="text"
              className="form-control"
              id="cepFreelancer"
              required
              value={Cliente.cepFreelancer}
              onChange={handleInputChange}
              name="cepFreelancer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paisFreelancer">País</label>
            <input
              type="text"
              className="form-control"
              id="paisFreelancer"
              required
              value={Cliente.paisFreelancer}
              onChange={handleInputChange}
              name="paisFreelancer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpfFreelancer">CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpfFreelancer"
              required
              value={Cliente.cpfFreelancer}
              onChange={handleInputChange}
              name="cpfFreelancer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="meiFreelancer">MEI</label>
            <input
              type="text"
              className="form-control"
              id="meiFreelancer"
              required
              value={Cliente.meiFreelancer}
              onChange={handleInputChange}
              name="meiFreelancer"
            />
          </div>

          <label>Profissional Indicado:</label>
          <select className="form-select" aria-label="Default select example"
            name="proficional" value={Cliente.proficional}
            onChange={handleInputChange || ''}>
            <option selected>Opções:</option>
            <option value="1">Drenagem Linfática</option>
            <option value="2">Bambuterapia</option>
            <option value="3">Massagem Suéca</option>
            <option value="4">Massagem com Pedras Quentes</option>
            <option value="5">Massagem de Aromaterapia</option>
            <option value="6">Massagem Profunda</option>
            <option value="7">Massagem Desportiva</option>
            <option value="8">Massagem de Facial</option>
            <option value="9">Massagem Shiatsu</option>
            <option value="10">Massagem Tailandesa</option>
            <option value="11">Massagem Tântrica</option>
            <option value="12">Modeladora</option>
            <option value="13">Quick Massagem</option>
            <option value="14">Reflexologia</option>
            <option value="15">Shantala</option>
          </select>

          <div className="form-group">
            <strong><li>Histórico da queixa:</li></strong>
            <label htmlFor="title">Localização da Dor:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.localizacaoDor}
              onChange={handleInputChange}
              name="localizacaoDor"
              placeholder="Local"
            />
            <label>Nivel do incomodo:</label>
            <select className="form-select" aria-label="Default select example" id="title"
              required value={Cliente.incomodo}
              onChange={handleInputChange} name="incomodo">
              <option selected>Opções</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="text-center mt-3">
            <button onClick={saveCliente} className="btn btn-success ">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCliente;
