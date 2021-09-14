import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Perfil from "./components/Perfil";
import ProfileSearchView from "./components/ProfileSearchView";
import { Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Feed path="/" exact></Feed>
      <Perfil path="/perfil"></Perfil>
      <ProfileSearchView path="/buscaperfil"></ProfileSearchView>
    </Switch>
  );
}

export default App;
