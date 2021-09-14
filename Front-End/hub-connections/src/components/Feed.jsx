import Footer from "./Footer";
import Header from "./Header";
import "../styles/Feed.css";
import { Button, Container, Form, Row, Col } from "reactstrap";
import starEmpty from "../assets/star_outline_black_24dp.svg";
import starFilled from "../assets/star_black_24dp.svg";
import comment from "../assets/insert_comment_black_24dp.svg";
import share from "../assets/share_black_24dp.svg";
import { useEffect, useState } from "react";

const Feed = () => {
  const [starUp, setStarUp] = useState(false);

  useEffect(() => {
    handleStarPost();
  }, [starUp]);

  const starPost = () => {
    console.log(starUp);
    if (starUp == false) {
      setStarUp(true);
    } else {
      setStarUp(false);
    }
  };

  const handleStarPost = () => {
    if (!starUp) {
      return starEmpty;
    } else {
      return starFilled;
    }
  };

  return (
    <div className="postsFeed">
      <Header></Header>

      {/* Create Post */}

      <section className="firstLine">
        <Container fluid={true}>
          <Row id="newPost">
            <Col md="12" id="userInfoPost">
              <img
                className="userProfilePic"
                src="pessoa.jpg"
                alt="Profile Icon"
              />
              <strong>User Name</strong>
            </Col>
            <Col id="createPost" md="12">
              <Form onSubmit="" className="formPost" id="formPost">
                <textarea
                  name="textPost"
                  placeholder="Ready to make connections?"
                  id="textPost"
                  rows="3"
                ></textarea>
                <div id="btnPost">
                  <Button type="submit" className="btnSubmitPost">
                    Post
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* List of Posts */}

      <section className="secondLine">
        <Container fluid={true}>
          <Row>
            <Col md="12" id="mainFeed">
              <ul className="posts" id="posts">
                <li className="post">
                  <Col md="12" id="userInfoPost">
                    <img
                      className="userProfilePic"
                      src="pessoa.jpg"
                      alt="Profile Icon"
                    />
                    <strong>User Name</strong>
                    <span>Datetime</span>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione perspiciatis accusantium nesciunt aut, corrupti
                      amet cupiditate velit. Incidunt pariatur deserunt amet,
                      magni voluptatibus inventore possimus. Voluptatem
                      architecto quibusdam reiciendis modi.
                    </p>
                  </Col>
                  <div id="postActions">
                    <Button className="actionButton">
                      <img src={starEmpty} alt="Like/Fav" />
                    </Button>
                    <Button className="actionButton">
                      <img src={share} alt="Share" />
                    </Button>
                    <Button className="actionButton">
                      <img src={comment} alt="Comment" />
                    </Button>
                  </div>
                </li>

                <li className="post">
                  <Col md="12" id="userInfoPost">
                    <img
                      className="userProfilePic"
                      src="pessoa.jpg"
                      alt="Profile Icon"
                    />
                    <strong>User Name</strong>
                    <span>Datetime</span>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione perspiciatis accusantium nesciunt aut, corrupti
                      amet cupiditate velit. Incidunt pariatur deserunt amet,
                      magni voluptatibus inventore possimus. Voluptatem
                      architecto quibusdam reiciendis modi.
                    </p>
                  </Col>
                  <div id="postActions">
                    <Button className="actionButton" onClick={starPost}>
                      <img src={handleStarPost()} alt="Like/Fav" />
                    </Button>
                    <Button className="actionButton">
                      <img src={share} alt="Share" />
                    </Button>
                    <Button className="actionButton">
                      <img src={comment} alt="Comment" />
                    </Button>
                  </div>
                </li>

                <li className="post">
                  <Col md="12" id="userInfoPost">
                    <img
                      className="userProfilePic"
                      src="pessoa.jpg"
                      alt="Profile Icon"
                    />
                    <strong>User Name</strong>
                    <span>Datetime</span>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione perspiciatis accusantium nesciunt aut, corrupti
                      amet cupiditate velit. Incidunt pariatur deserunt amet,
                      magni voluptatibus inventore possimus. Voluptatem
                      architecto quibusdam reiciendis modi.
                    </p>
                  </Col>
                  <div id="postActions">
                    <Button className="actionButton">
                      <img src={starEmpty} alt="Like/Fav" />
                    </Button>
                    <Button className="actionButton">
                      <img src={share} alt="Share" />
                    </Button>
                    <Button className="actionButton">
                      <img src={comment} alt="Comment" />
                    </Button>
                  </div>
                </li>

                <li className="post">
                  <Col md="12" id="userInfoPost">
                    <img
                      className="userProfilePic"
                      src="pessoa.jpg"
                      alt="Profile Icon"
                    />
                    <strong>User Name</strong>
                    <span>Datetime</span>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione perspiciatis accusantium nesciunt aut, corrupti
                      amet cupiditate velit. Incidunt pariatur deserunt amet,
                      magni voluptatibus inventore possimus. Voluptatem
                      architecto quibusdam reiciendis modi.
                    </p>
                  </Col>
                  <div id="postActions">
                    <Button className="actionButton">
                      <img src={starEmpty} alt="Like/Fav" />
                    </Button>
                    <Button className="actionButton">
                      <img src={share} alt="Share" />
                    </Button>
                    <Button className="actionButton">
                      <img src={comment} alt="Comment" />
                    </Button>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Feed;
