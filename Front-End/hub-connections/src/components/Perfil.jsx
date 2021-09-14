import { Container, Row, Col, Button, Form } from "reactstrap";
import "../styles/Perfil.css";
import Footer from "./Footer";
import Header from "./Header";
import photo from "../assets/profile_photo.jpg";
import nem from "../assets/adwaita.jpg";
//import plusIcon from "../assets/add_circle_black_48dp.svg";
import foto from "../assets/intel.png";
import foto1 from "../assets/hp.jpg";
import foto2 from "../assets/oracle.png";
import foto3 from "../assets/HubConnections_Brand.png";
import logo from "../assets/logoHC_edited.png";
const Perfil = () => {
  const onSubmit = (fileData) => {
    console.log(fileData);
  };

  return (
    <div className="backgroundPerfil">
      <Header></Header>
      <section className="userInfo">
        <div>
          <img id="banner" src={nem} />
        </div>

        <Container fluid={true}>
          <Row className="userInfoCard">
            <div className="photoDescription">
              <img src={photo} alt="Icone de Perfil do Usuário" />
            </div>
            <Col md="10">
              <div className="description1">
                <ul id="listaDescription">
                  <h2>Informações</h2>
                  <li>Nome: Tiago Gomes</li>
                  <li>Idade: 26</li>
                  <li>Localização: Ribeira</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div>
            <Col md="12" className="portfolioTitle">
              <h2>Empresas:</h2>
            </Col>
            <div className="portfolioFiles">
              <div className="fileUpload">
                {/* <input type="file" {...register("fileUp")} /> */}

                {/* <Button id="addFiles"> */}
                <a
                  href="https://www.intel.com.br/content/www/br/pt/homepage.html"
                  target="_blank"
                >
                  <img
                    className="addImageIcon"
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102011/1_9.jpg?itok=_qpkowg-"
                    alt="Add file Icon"
                    height="200px"
                  />
                </a>
                {/* </Button> */}
              </div>
              <div className="fileUpload">
                {/* <input type="file" {...register("fileUp")} /> */}

                {/* <Button id="addFiles"> */}
                <a href="https://www.hp.com/br-pt/shop/" target="_blank">
                  <img
                    className="addImageIcon"
                    src={foto1}
                    alt="Add file Icon"
                    height="200px"
                  />
                </a>
                {/* </Button> */}
              </div>
              <div className="fileUpload">
                {/* <input type="file" {...register("fileUp")} /> */}

                {/* <Button id="addFiles"> */}
                <a
                  href="https://www.oracle.com/br/think-oracle/?source=:ad:pas:go:awr:a_lad:71700000085828447-58700007287561748-p65447597849:RC_WWMK210803P00058:MainAd&SC=:ad:pas:go:awr:a_lad::RC_WWMK210803P00058:MainAd&gclid=Cj0KCQjwkIGKBhCxARIsAINMioLfIr8K4woE96wKdndn2ZcrM-aCrhvFAJLy-RbaxHiPYc7F5wBT_tAaAgBHEALw_wcB&gclsrc=aw.ds"
                  target="_blank"
                >
                  <img
                    className="addImageIcon"
                    src="https://www.blognone.com/sites/default/files/styles/large/public/topics-images/oracle.png?itok=5E--Sa3O"
                    alt="Add file Icon"
                    height="200px"
                  />
                </a>
              </div>
              <div className="fileUpload">
                {/* <input type="file" {...register("fileUp")} /> */}

                {/* <Button id="addFiles"> */}
                <a href="https://hubsalvador.com.br/" target="_blank">
                  <img
                    className="addImageIcon"
                    src={logo}
                    alt="Add file Icon"
                    height="200px"
                  />
                </a>
                {/* </Button> */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="featuredPosts">
            <Col md="12">
              <div className="description" type="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente expedita dicta nostrum. Ipsam provident porro tempore
                minima, minus rem autem neque, id tempora sequi in sint
                praesentium cupiditate fugiat at!
                <br />
                --------------------------------------------------------------
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente expedita dicta nostrum. Ipsam provident porro tempore
                minima, minus rem autem neque, id tempora sequi in sint
                praesentium cupiditate fugiat at!
                <br />
                -------------------------------------------------------------
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente expedita dicta nostrum. Ipsam provident porro tempore
                minima, minus rem autem neque, id tempora sequi in sint
                praesentium cupiditate fugiat at! `
              </div>
            </Col>
          </div>
        </Container>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Perfil;
