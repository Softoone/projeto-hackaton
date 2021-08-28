import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import AddFreelance from "../components/Freelance/AddFreelance";
import Freelance from "../components/Freelance/Freelance";
import FreelanceList from "../components/Freelance/FreelanceList";
import EmpresaList from "../components/Empresa/EmpresaList";
import AddEmpresa from "../components/Empresa/AddEmpresa";
import Empresa from "../components/Empresa/Empresa";

const Rotas = () => {
  return (
    <div>
      <Switch>
        {/* Rotas Funcionario */}
        <Route exact path={["/", "/massoterapia"]} component={Home}></Route>
        <Route path="/funcionario" component={FreelanceList} />
        <Route exact path="/add" component={AddFreelance} />
        <Route path="/funcionarios/:id" component={Freelance} />
        {/* Rotas Produtos */}
        <Route path="/produto" component={EmpresaList} />
        <Route exact path="/addProduto" component={AddEmpresa} />
        <Route path="/Produtos/:id" component={Empresa} />
      </Switch>         
    </div>
  )
}

export default Rotas;