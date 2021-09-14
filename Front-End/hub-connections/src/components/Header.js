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
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  const dropDownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const getConnectionsByName = () => {
    getUserById("1").then((res) => {
      console.log(res);
      setProfiles(res.data);
    });
    setModal(true);
  };

  const searchForConnections = () => {};

  return (
    <Navbar id="navHeader">
      <img id="logoHeader" src={logo} alt="Hub Connection Logo" />
      {/* <DropdownItem header>   <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="Perfil">Perfil</BreadcrumbItem>
      </Breadcrumb>
    </div>
   </DropdownItem> */}
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
        {modal ? (
          <ProfileSearchView isOpen={modal} toggle={modalToggle} />
        ) : null}
      </div>
      <div className="dropdownFunction">
        <Dropdown
          direction="left"
          isOpen={dropdownOpen}
          toggle={dropDownToggle}
        >
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
