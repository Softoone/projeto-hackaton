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
import logo from "../assets/logoHC_edited.png";
import "../styles/Header.css";
import iconUser from "../assets/account_circle_white_24dp.svg";
import searchIcon from "../assets/search_white_24dp.svg";
import { getUserById } from "../services/apiService";
import ProfileSearchView from "./ProfileSearchView";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [searchProfiles, setSearchProfiles] = useState("");

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const getConnectionsByName = () => {
    getUserById("1").then((res) => {
      console.log(res);
      setProfiles(res.data);
    });

    return <ProfileSearchView></ProfileSearchView>;
  };

  const searchForConnections = () => {};

  return (
    <Navbar id="navHeader">
      <img id="logoHeader" src={logo} alt="Hub Connection Logo" />
      <div className="searchBar">
        <Input
          id="searchInput"
          type="text"
          placeholder="Looking for new connections?"
          defaultValue={searchProfiles}
          onChange={searchForConnections}
        />
        <Button id="searchButton" onClick={getConnectionsByName}>
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
