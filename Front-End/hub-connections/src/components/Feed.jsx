import Footer from "./Footer";
import Header from "./Header";
import "../styles/Feed.css";
import { Container, Row } from "reactstrap";

const Feed = () => {
  return (
    <Container>
      <Header></Header>
      <Row id="feedBody">
        <h1>Tela de feed</h1>
        <h2>Subtitle</h2>
      </Row>
      <Footer></Footer>
    </Container>
  );
};

export default Feed;
