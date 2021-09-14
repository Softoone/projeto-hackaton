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

const ProfileSearchView = (props) => {
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

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Find new connections</ModalHeader>
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
          <div className="btnModalFooter">
            <Button onClick={props.toggle}>Done</Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileSearchView;
