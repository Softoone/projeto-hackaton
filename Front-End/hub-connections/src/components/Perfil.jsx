import { Container, Row, Col, Button, Form } from "reactstrap";
import "../styles/Perfil.css";
import Footer from "./Footer";
import Header from "./Header";
import photo from "../assets/profile_photo.jpg";
import nem from "../assets/adwaita.jpg";
import plusIcon from "../assets/add_circle_black_48dp.svg";

const Perfil = () => {
  const onSubmit = (fileData) => {
    console.log(fileData);
  };

  return (
    <div>
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
              <div className="description" type="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente expedita dicta nostrum. Ipsam provident porro tempore
                minima, minus rem autem neque, id tempora sequi in sint
                praesentium cupiditate fugiat at!
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div>
            <Col md="12" className="portfolioTitle">
              <h2>Portfólio</h2>
            </Col>
            <div className="portfolioFiles">
              <div className="fileUpload">
                {/* <input type="file" {...register("fileUp")} /> */}
                <Form>
                  <Button id="addFiles">
                    <img
                      className="addImageIcon"
                      src={plusIcon}
                      alt="Add file Icon"
                    />
                  </Button>
                </Form>
              </div>
              <div className="fileUpload"></div>
              <div className="fileUpload"></div>
              <div className="fileUpload"></div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="featuredPosts"></div>
        </Container>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Perfil;
