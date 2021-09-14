import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Perfil from "./components/Perfil";
import { Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Login path="/"></Login>
      <Feed path="/feed"></Feed>
      <Perfil path="/perfil"></Perfil>
    </Switch>
  );
}

export default App;
