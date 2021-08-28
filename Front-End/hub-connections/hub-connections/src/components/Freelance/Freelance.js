import React, { useState, useEffect } from "react";
import ClienteDataService from "../../services/Empresa/EmpresaDataServiceRest";
import { Link } from "react-router-dom";
import Header from '../Header'

// Inicializando os valores
const Cliente = props => {
  const initialClienteState = {
    key: null,
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
      emailFreelance: currentCliente.emailFreelance,
      emailConsultor: currentCliente.emailFreelance,
      nomeFreelance: currentCliente.nomeFreelance,
      sobrenomeFreelance: currentCliente.sobrenomeFreelance,
      telefoneFreelance: currentCliente.telefoneFreelance,
      dataNascimentoFreelance: currentCliente.dataNascimentoFreelance,
  
      cargoFreelance: currentCliente.cargoFreelance,
      servicoFreelance: currentCliente.servicoFreelance,
      especialidadeFreelance: currentCliente.especialidadeFreelance,
      enderecoFreelance: currentCliente.enderecoFreelance,
      cidadeFreelance: currentCliente.cidadeFreelance,
      cepFreelance: currentCliente.cepFreelance,
      paisFreelance: currentCliente.paisFreelance,
      meiFreelance: currentCliente.meiFreelance,
      cpfFreelance: currentCliente.cpfFreelance,

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
            <h1><dt>Ficha de Freelance</dt></h1>
          </div>
          
          
          <div className="form-group">
            <label htmlFor="nomeFreelance">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nomeFreelance"
              required
              value={currentCliente.nomeFreelance}
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
              value={currentCliente.sobrenomeFreelance}
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
              value={currentCliente.emailFreelance}
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
              value={currentCliente.telefoneFreelance}
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
              value={currentCliente.dataNascimento}
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
              value={currentCliente.cargoFreelance}
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
              value={currentCliente.servicoFreelance}
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
              value={currentCliente.especialidadeFreelancer}
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
              value={currentCliente.enderecoFreelancer}
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
              value={currentCliente.cidadeFreelancer}
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
              value={currentCliente.cepFreelancer}
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
              value={currentCliente.paisFreelancer}
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
              value={currentCliente.cpfFreelancer}
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
              value={currentCliente.meiFreelancer}
              onChange={handleInputChange}
              name="meiFreelancer"
            />
          </div>
          <form className="form">
            
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
