import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { postSmurf } from "../actions";

const SmurfForm = props => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    props.postSmurf(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        name="name"
        placeholder="name"
        ref={register}
        style={{ marginRight: "20px" }}
      />
      <input
        name="age"
        placeholder="age"
        ref={register}
        style={{ marginRight: "20px" }}
      />

      <input
        name="height"
        placeholder="height"
        ref={register}
        style={{ marginRight: "20px" }}
      />

      <input type="submit" />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);
