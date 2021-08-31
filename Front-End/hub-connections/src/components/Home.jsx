import "../styles/Home.css";
import peopleImage from "../assets/download.jpeg";
import {
  Row,
  Card,
  CardBody,
  CardText,
  Button,
  CardTitle,
  CardSubtitle,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand,
} from "reactstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Navbar>
          <NavbarBrand>Hub Connections</NavbarBrand>
        </Navbar>
        <Col>
          <Card>
            <CardBody>
              <CardTitle tag="h3">
                Get Started in our brand new community
              </CardTitle>
              <div id="login-box">
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                </Form>
                <Button color="primary" size="lg">
                  Sign in
                </Button>
                <Button outline color="primary" size="lg">
                  Sign in with Google
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <img alt="Imagem a ser adicionada" />
        </Col>

        <div>
          <p>Texto descritivo sobre o objetivo/funcionalidades da página</p>
        </div>
      </Row>
      <footer></footer>
    </Container>
  );
};

export default Home;
