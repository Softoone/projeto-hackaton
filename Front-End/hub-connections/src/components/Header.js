import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/HubConnections_Brand.png";
import "../styles/Header.css"

const Header = () => {
  return (
    <Navbar id="navHeader">
      <NavbarBrand>
        <img src={logo} alt="Hub Connections Logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
