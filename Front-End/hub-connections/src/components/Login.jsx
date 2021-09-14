import "../styles/Login.css";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Card id="loginCard">
              <CardHeader>
                <h2>Sign In</h2> <br></br>Stay updated about your workspace
                environment
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="loginEmail">Email</Label>
                    <Input type="email" name="email" id="loginEmail" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="loginPassword">Password</Label>
                    <Input type="password" name="password" id="loginPassword" />
                  </FormGroup>
                </Form>
                <span>
                  <a
                    id="linkForgotPassword"
                    href="https://www.google.com/"
                    target="_blank"
                  >
                    Forgot Password ?
                  </a>
                </span>
                <Button id="loginButton" color="primary">
                  Sign In
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Login;
