import React, { useEffect, useState } from "react";
import "../styles/ProfileSearchView.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { getProfiles } from "../services/apiService";

const ProfileSearchView = ({ nickname }) => {
  const [modal, setModal] = useState(false);
  const [profileNickname, setNickname] = useState([]);

  useEffect(() => {
    getAllProfiles();
  }, []);

  const getAllProfiles = () => {
    getProfiles().then((res) => {
      console.log(res);
      setNickname(res.data);
    });
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Abrir modal
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Find new connections</ModalHeader>
        <ModalBody>
          <Table id="TableProfiles" borderless={true}>
            <tbody>
              {profileNickname &&
                profileNickname.map((name, index) => (
                  <tr>
                    <th scope="row">{name.apelidoPerfil}</th>
                    <td>
                      <Button onClick="">Connect</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileSearchView;
