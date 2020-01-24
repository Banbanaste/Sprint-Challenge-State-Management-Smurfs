import React, { useEffect } from "react";
import { connect } from "react-redux";

import SmurfCard from "./SmurfCard";
import { getSmurf } from "../actions";

import Loader from "react-loader-spinner";

import { Row, Col } from "reactstrap";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <Row>
      {props.isLoading && (
        <Col>
          <Loader
            type="Bars"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        </Col>
      )}
      {props.smurfs &&
        !props.isLoading &&
        props.smurfs.map(smurf => (
          <SmurfCard
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            id={smurf.id}
          />
        ))}
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
