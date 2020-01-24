import React, { Component } from "react";
import "./App.css";

import { Container, Col, Row } from "reactstrap";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Row>
          <Col style={{ margin: "40px auto" }}>
            <SmurfForm />
          </Col>
        </Row>
        <Row>
          <SmurfList />
        </Row>
      </Container>
    );
  }
}

export default App;
