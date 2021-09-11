import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Navbar,
} from "reactstrap";
import { useState } from "react";
import logo from "../assets/logo_HubConnections.jfif";
import "../styles/Header.css";
import iconUser from "../assets/account_circle_black_24dp.svg";
import searchIcon from "../assets/search_black_24dp.svg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <Navbar id="navHeader">
      <img id="logoHeader" src={logo} alt="Hub Connection Logo" />
      <div className="searchBar">
        <Input
          id="searchInput"
          placeholder="Looking for new connections?"
        ></Input>
        <Button id="searchButton">
          <img id="searchIcon" src={searchIcon} alt="Search icon" />
        </Button>
      </div>
      <div className="dropdownFunction">
        <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle id="dropdownIcon">
            <img id="iconUser" src={iconUser} alt="User account icon" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Perfil</DropdownItem>
            <DropdownItem>Theme</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
