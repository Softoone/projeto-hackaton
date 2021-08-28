import React, { useState } from "react";
import ClienteDataService from "../../services/Cliente/clienteDataServiceRest";
import Header from '../Header'

const AddCliente = () => {
  const initialClienteState = {
    id: null,
    nomeEmpresa:"",
    dataAberturaEmpresa:"",
    servicoEmpresa:"",
    emailEmpresa:"",
    cnpj:"",
    nomeFantasia:"",
    areaEmpresa:"",

    dataInicio: "",
    dataConsulta: "",
    /*published: false */
  };
  const [Cliente, setCliente] = useState(initialClienteState);
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCliente({ ...Cliente, [name]: value });
  };

  const saveCliente = () => {
    var data = {
      nomeEmpresa: Cliente.nomeEmpresa,
      dataAberturaEmpresa: Cliente.dataAberturaEmpresa,
      cnpj: Cliente.cnpj,
      nomeFantasia: Cliente.nameFantasia,
      areaEmpresa: Cliente.areaEmpresa,

      dataInicio: Cliente.dataInicio,
      dataConsulta: Cliente.dataConsulta,
    };
    ClienteDataService.create(data)
      .then(response => {
        setCliente({
          nomeEmpresa: response.data.nomeEmpresa,
          dataAberturaEmpresa: response.data.dataAberturaEmpresa,
          cnpj: response.data.cnpj,
          nomeFantasia: response.data.nameFantasia,
          areaEmpresa: response.data.areaEmpresa,
          
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
            <h1><dt>Cadastro da Empresa</dt></h1>
          </div>
          <div className="form-group">
            <label htmlFor=" nomeEmpresa">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nomeEmpresa"
              required
              value={Cliente.nomeEmpresa}
              onChange={handleInputChange}
              name="nomeEmpresa"
            />
          </div>
          <div className="form-group">
            <label htmlFor=" cnpj">CNPJ</label>
            <input
              type="text"
              className="form-control"
              id="cnpj"
              required
              value={Cliente.cnpj}
              onChange={handleInputChange}
              name="cnpj"
            />
          </div>   
          <div className="form-group">
            <label htmlFor=" nomeFantasia">Nome Fantasia</label>
            <input
              type="text"
              className="form-control"
              id="nomeFantasia"
              required
              value={Cliente.nomeFantasia}
              onChange={handleInputChange}
              name="nomeFantasia"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dataAberturaEmpresa">Data Abertura</label>
            <input
              type="date"
              className="form-control"
              id="dataAberturaEmpresa"
              required
              value={Cliente.dataAberturaEmpresa}
              onChange={handleInputChange}
              name="dataAberturaEmpresa"
            />
          </div>
          <div className="form-group">
            <label htmlFor="areaEmpresa">Aréa de atuação</label>
            <input
              type="date"
              className="form-control"
              id="areaEmpresa"
              required
              value={Cliente.areaEmpresa}
              onChange={handleInputChange}
              name="areaEmpresa"
            />
          </div>
          <label>Consultor</label>
          <div className="form-group">
            <label htmlFor="nomeConsultor ">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nomeConsultor"
              required
              value={Cliente.nomeConsultor}
              onChange={handleInputChange}
              name="nomeConsultor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sobrenomeConsultor">Sobrenome</label>
            <input
              type="text"
              className="form-control"
              id="sobrenomeConsultor"
              required
              value={Cliente.sobrenomeConsultor}
              onChange={handleInputChange}
              name="sobrenomeConsultor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cargoConsultor">Cargo</label>
            <input
              type="text"
              className="form-control"
              id="cargoConsultor"
              required
              value={Cliente.cargoConsultor}
              onChange={handleInputChange}
              name="cargoConsultor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="servico">Servico</label>
            <input
              type="text"
              className="form-control"
              id="servico"
              required
              value={Cliente.servico}
              onChange={handleInputChange}
              name="servico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="especialidade">Especialidade</label>
            <input
              type="text"
              className="form-control"
              id="especialidade"
              required
              value={Cliente.especialidade}
              onChange={handleInputChange}
              name="especialidade"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endereco">Endereco</label>
            <input
              type="text"
              className="form-control"
              id="endereco"
              required
              value={Cliente.endereco}
              onChange={handleInputChange}
              name="endereco"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              required
              value={Cliente.cidade}
              onChange={handleInputChange}
              name="cidade"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cep">Cep</label>
            <input
              type="text"
              className="form-control"
              id="cep"
              required
              value={Cliente.cep}
              onChange={handleInputChange}
              name="cep"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pais">País</label>
            <input
              type="text"
              className="form-control"
              id="pais"
              required
              value={Cliente.pais}
              onChange={handleInputChange}
              name="pais"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailConsultor">Email</label>
            <input
              type="text"
              className="form-control"
              id="emailConsultor"
              required
              value={Cliente.emailConsultor}
              onChange={handleInputChange}
              name="emailConsultor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefoneConsultor">Telefone</label>
            <input
              type="text"
              className="form-control"
              id="telefoneConsultor"
              required
              value={Cliente.telefoneConsultor}
              onChange={handleInputChange}
              name="telefoneConsultor"
            />
          </div>

          <strong className="text-center">Dados do Atendente:</strong>
          <div className="form-group">
            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.nomeAtendente}
              onChange={handleInputChange}
              name="nomeAtendente"
              placeholder="Nome Completo"
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
            <label htmlFor="title">Data de inicio Avaliação:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={Cliente.dataInicio}
              onChange={handleInputChange}
              name="dataInicio"
            />
          </div>
          <div className="form-group">
            <li><strong>Dados pessoais de Paciente:</strong></li>

            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.nomeCliente}
              onChange={handleInputChange}
              name="nomeCliente"
              placeholder="Nome Completo"
            />
            <label htmlFor="title">Telefone:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.telefone}
              onChange={handleInputChange}
              name="telefone"
              placeholder=""
            />
            <label htmlFor="title">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.enderecoCompleto}
              onChange={handleInputChange}
              name="enderecoCompleto"
              placeholder=""
            />
            <label htmlFor="title">E-mail:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.email}
              onChange={handleInputChange}
              name="email"
              placeholder="email@email.com"
            />
          </div>
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
