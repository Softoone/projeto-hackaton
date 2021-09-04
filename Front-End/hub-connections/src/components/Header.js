import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/HubConnections_Brand.png";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <img src={logo} alt="Hub Connections Logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
