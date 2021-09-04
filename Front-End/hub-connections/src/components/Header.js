import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/HubConnections_Brand.png";
<<<<<<< HEAD
import "../styles/Header.css"

const Header = () => {
  return (
    <Navbar id="navHeader">
=======
>>>>>>> 36758658ea4d2fa1985c85744cfd75d07e9580b4
      <NavbarBrand>
        <img src={logo} alt="Hub Connections Logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
