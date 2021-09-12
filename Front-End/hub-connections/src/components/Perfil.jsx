import { Container, Row, Col } from "reactstrap";
import "../styles/Perfil.css";
import Footer from "./Footer";
import Header from "./Header";

const Perfil = () => {
  return (
    <div>
      <Header></Header>
      <section className="userInfo">
        <Container fluid={true}>
          <Row>
            <div className="userInfoCard">
              <Col md="12" id="banner">
                Banner
              </Col>
              <img src="" alt="Icone de Perfil do Usuário" />
              <Col md="12" id="description"></Col>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div className="portfolio">
            <h2>PortFolio</h2>
            <div className="fileUpload"></div>
            <div className="fileUpload"></div>
            <div className="fileUpload"></div>
            <div className="fileUpload"></div>
          </div>
        </Container>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Perfil;
