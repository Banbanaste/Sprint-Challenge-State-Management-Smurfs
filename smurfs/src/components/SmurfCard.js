import React from "react";
import { Card, Row, CardTitle, Col, Badge, Button } from "reactstrap";

import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const SmurfCard = props => {
  return (
    <Col xs="4" style={{ marginBottom: "20px" }}>
      <Card body>
        <CardTitle>{props.name}</CardTitle>

        <Badge color="primary" style={{ margin: "0 0 10px 0" }}>
          age: {props.age}
        </Badge>

        <Badge color="primary" style={{ margin: "0 0 10px 0" }}>
          height: {props.height}
        </Badge>
        <Button
          color="warning"
          onClick={() => {
            console.log(props.id);
            props.deleteSmurf(props.id);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { deleteSmurf })(SmurfCard);
