import React, { useState, useEffect } from "react";
import ClienteDataService from "../../services/Empresa/EmpresaDataServiceRest";
import { Link } from "react-router-dom";
import Header from '../Header'

// Inicializando os valores
const Cliente = props => {
  const initialClienteState = {
    key: null,
    nomeEmpresa:"",
    dataAberturaEmpresa:"",
    servicoEmpresa:"",
    emailEmpresa:"",
    cnpj:"",
    nomeFantasia:"",
    areaEmpresa:"",

    dataInicio: "",
    dataConsulta: "",
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  const [currentCliente, setCurrentCliente] = useState(initialClienteState);
  // obter todos os clientes
  const getCliente = id => {
    ClienteDataService.get(id)
      .then(response => {
        setCurrentCliente(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCliente(props.match.params.id);
    return () => {
      setMessage({})
    }
  }, [props.match.params.id]);
  // useEffect(()=>{
  //   const data = ClienteDataService.getById(key)
  //   console.log(key)
  //   setCurrentCliente(data[0])     
  // }, [])
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCliente({ ...currentCliente, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      id: currentCliente.id,
      nomeEmpresa: currentCliente.nomeEmpresa,
      dataAberturaEmpresa: currentCliente.dataAberturaEmpresa,
      cnpj: currentCliente.cnpj,
      nomeFantasia: currentCliente.nameFantasia,
      areaEmpresa: currentCliente.areaEmpresa,
      
      dataInicio: currentCliente.dataInicio,
      dataConsulta: currentCliente.dataConsulta,
      
      published: status
    };
    ClienteDataService.update(currentCliente.id, data)
      .then(response => {
        setCurrentCliente({ ...currentCliente, published: status });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };
  //Atualizar cliente 
  const updateCliente = () => {
    
    ClienteDataService.update(currentCliente.id, currentCliente)
      .then(response => {
        console.log(response);
        setMessage("Paciente atualizado com sucesso!");
      })
      .catch(e => {
        console.log(e);
      });
    //console.log(currentCliente)
    // const data = {
    //   nomeCliente: currentCliente.nomeCliente,
    //   estadoCivil: currentCliente.estadoCivil,
    //   profissao: currentCliente.profissao,
    //   telefone: currentCliente.telefone,
    //   enderecoCompleto: currentCliente.enderecoCompleto,
    //   email: currentCliente.email,

    //   nomeAtendente: currentCliente.nomeAtendente,
    //   proficional: currentCliente.proficional,
    //   dataInicio: currentCliente.dataInicio,
    //   dataConsulta: currentCliente.dataConsulta,
    //   localizacaoDor: currentCliente.localizacaoDor,
    //   intensidade: currentCliente.intensidade,
    //   tempo: currentCliente.tempo,
    //   tratamento: currentCliente.tratamento,
    //   medicamento: currentCliente.medicamento,
    //   quaisAlergias: currentCliente.quaisAlergias,
    //   alergias: currentCliente.alergias,
    //   incomodo: currentCliente.incomodo,
    //   ocorrencia: currentCliente.ocorrencia,
    //   habitos: currentCliente.habitos,
    //   vicio: currentCliente.vicio,
    //   med: currentCliente.med,
    //   queix: currentCliente.queix,
    //   historicoFamiliar: currentCliente.historicoFamiliar,
    //   patologia: currentCliente.patologia,
    //};  
    // ClienteDataService.update(key, data);
    // setCurrentCliente(data)
  };
  // deletar cliente
  const deleteCliente = () => {
    console.log(currentCliente)
    if (window.confirm('Deseja excluir?')) {
      ClienteDataService.remove(currentCliente.id)
        .then(response => {
          console.log(response.data);
          props.history.push("/clientes");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <Header />
      {currentCliente ? (
        // formulario
        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Empresa</dt></h1>
          </div>
          <form className="form">
            
          <div className="form-group">
            <label htmlFor=" nomeEmpresa">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nomeEmpresa"
              required
              value={currentCliente.nomeEmpresa}
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
              value={currentCliente.cnpj}
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
              value={currentCliente.nomeFantasia}
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
              value={currentCliente.dataAberturaEmpresa}
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
              value={currentCliente.areaEmpresa}
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
              value={currentCliente.nomeConsultor}
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
              value={currentCliente.sobrenomeConsultor}
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
              value={currentCliente.cargoConsultor}
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
              value={currentCliente.servico}
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
              value={currentCliente.especialidade}
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
              value={currentCliente.endereco}
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
              value={currentCliente.cidade}
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
              value={currentCliente.cep}
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
              value={currentCliente.pais}
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
              value={currentCliente.emailConsultor}
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
              value={currentCliente.telefoneConsultor}
              onChange={handleInputChange}
              name="telefoneConsultor"
            />
          </div>
            <label>Profissional Indicado:</label>
            <select className="form-select" aria-label="Default select example"
              name="proficional" value={currentCliente.proficional}
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
              <label>
                <strong>Status:</strong>
              </label>
              {currentCliente.published ? "Published" : "Pending"}
            </div>
          </form>
          <div className="text-center">
            {currentCliente.published ? (
              <button
                className="btn btn-success mr-2"
                onClick={() => updatePublished(false)}
              >
                Cancelar
              </button>
            ) : (
              <button
                className="btn btn-success mr-2"
                onClick={() => updatePublished(true)}
              >
                Publicar
              </button>
            )}
            <Link to="/Cliente">
              <button className="btn btn-danger mr-2" onClick={deleteCliente}>
                Deletar
              </button>
            </Link>

            <a href="/Cliente">
              <button
                type="submit"
                className="btn btn-warning"
                onClick={updateCliente}
              >
                Atualizar
              </button>
            </a>
            <p>{message}</p>
          
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click to return...</p>
        </div>
      )}
    </div>
  );
};

export default Cliente;
