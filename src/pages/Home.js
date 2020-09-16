import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Modal, Container, Row, Col } from "react-bootstrap";
import triviaImg from "../images/trivia-image.jpg";

export default function Home() {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose from one of the categories below
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Categories</h4>
          <p>Each category has over 100+ questions and are addded daily.</p>
          <br />
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/generalknowledge/9`}
                >
                  General Knowledge
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/books/10`}
                >
                  Books
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/film/11`}
                >
                  Film
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/music/12`}
                >
                  Music
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/television/14`}
                >
                  Television
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/videogames/15`}
                >
                  Video Games
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/sciencenature/17`}
                >
                  {"Science & Nature"}
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/computers/18`}
                >
                  Computers
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/mathematics/19`}
                >
                  Mathematics
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/mythology/20`}
                >
                  Mythology
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/sports/21`}
                >
                  Sports
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/history/23`}
                >
                  History
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/art/25`}
                >
                  Art
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/animals/27`}
                >
                  Animals
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/comics/29`}
                >
                  Comics
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/animeandmanga/31`}
                >
                  {"Anime & Manga"}
                </Button>{" "}
              </Col>
              <Col xs={6} md={4}>
                <Button
                  variant="outline-primary btn-block mb-1"
                  as={Link}
                  to={`/questions/cartoons/32`}
                >
                  Cartoons
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Jumbotron style={{ padding: 100, marginBottom: 0 }}>
        <h1>Welcome To Easy Trivia!</h1>
        <p>
          Good with random trivia questions? Take some here for fun. We ask 10
          questions about the category you choose, come take a look, they are
          easy.
        </p>
        <p>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Start Now
          </Button>
        </p>
      </Jumbotron>
      <img src={triviaImg} width="100%" alt="trivia logo" />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
