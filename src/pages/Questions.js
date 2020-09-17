import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import shuffle from "shuffle-array";
import he from "he";
import huh from "../images/question.svg";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";

function Questions(props) {
  function questionFormat(index, question, incorrect_answers, correct_answer) {
    const all = shuffle([...incorrect_answers, correct_answer]);

    return (
      <Card style={{ padding: 20, margin: 10 }}>
        <Card.Body>
          <Card.Title>Question {index}</Card.Title>
          <Card.Text>{he.decode(question)}</Card.Text>
          <Container>
            <Row>
              <Col>
                <Button
                  variant="secondary"
                  style={{ margin: 5, width: "100%" }}
                  onClick={() => {
                    setScore((score) => [...score, he.decode(all[0])]);
                    setIndex((index) => index + 1);
                  }}
                >
                  {he.decode(all[0])}
                </Button>
                <Button
                  variant="secondary"
                  style={{ margin: 5, width: "100%" }}
                  onClick={() => {
                    setScore((score) => [...score, he.decode(all[1])]);
                    setIndex((index) => index + 1);
                  }}
                >
                  {he.decode(all[1])}
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  style={{ margin: 5, width: "100%" }}
                  onClick={() => {
                    setScore((score) => [...score, he.decode(all[2])]);
                    setIndex((index) => index + 1);
                  }}
                >
                  {he.decode(all[2])}
                </Button>
                <Button
                  variant="secondary"
                  style={{ margin: 5, width: "100%" }}
                  onClick={() => {
                    setScore((score) => [...score, he.decode(all[3])]);
                    setIndex((index) => index + 1);
                  }}
                >
                  {he.decode(all[3])}
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }

  const [title, setTitle] = React.useState();
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState([]);
  const [error, setError] = React.useState();

  async function getQuestions() {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${props.match.params.id}&type=multiple`
    );

    if (response.data.results.length < 1) {
      setError("Sorry we cannot find that category on the server...");
      return;
    }

    if (response.data) {
      if (title === "" || title === undefined) {
        setTitle(response.data.results[0].category);
      }

      for (let i = 0; i < response.data.results.length; i++) {
        // add answer
        setAnswers((answers) => [
          ...answers,
          he.decode(response.data.results[i].correct_answer),
        ]);

        // set questions/answers in cards
        setQuestions((questions) => [
          ...questions,
          questionFormat(
            i + 1,
            response.data.results[i].question,
            response.data.results[i].incorrect_answers,
            response.data.results[i].correct_answer
          ),
        ]);
      }

      //   setQuestions(response.data.results);
    } else {
      console.log("error getting questions from api...");
    }
  }

  function finalScore() {
    var grade = 0;

    for (var i = 0; i < score.length; i++) {
      if (score[i] === answers[i]) {
        grade++;
      }
    }

    return `${grade} out of 10`;
  }

  function restart() {
    // clear questions, answers and score
    setQuestions([]);
    setAnswers([]);
    setScore([]);

    // restart index
    setIndex(0);

    // call axios for new set of questions
    getQuestions();
  }

  React.useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Jumbotron>
        <div>
          <h1>{title}</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary" as={Link} to="/">
              Go Back Home
            </Button>
          </p>
        </div>
      </Jumbotron>
      <br />
      <Container>
        {questions[index]}
        <div style={{ marginTop: 25 }} className="final-card mx-auto">
          {index === questions.length && questions.length !== 0 ? (
            <Card style={{ padding: 20, margin: 10 }}>
              <Card.Body>
                <Card.Title>You have finished the game!</Card.Title>
                <Card.Text>
                  <p>Your final score: {finalScore()}</p>
                  <br />
                  {score.map((score, i) => (
                    <Alert
                      key={i}
                      variant={score === answers[i] ? "success" : "danger"}
                    >
                      {score === answers[i]
                        ? score
                        : `You answered ${score}, but he correct answer is ${answers[i]}`}
                    </Alert>
                  ))}
                </Card.Text>
                <Container>
                  <br />
                  <Button variant="primary" onClick={restart}>
                    Try Again?
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          ) : null}
        </div>

        {error !== undefined ? (
          <>
            <h3>{error}</h3>
            <img src={huh} alt="huh" />
            <p style={{ marginBottom: 0 }}>Icon made by</p>
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            <p style={{ marginBottom: 0 }}>from</p>{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </>
        ) : null}
      </Container>
    </div>
  );
}

export default Questions;
