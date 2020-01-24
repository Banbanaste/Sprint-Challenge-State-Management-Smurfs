import axios from "axios";

export const getSmurf = () => {
  return dispatch => {
    dispatch({ type: "START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

export const postSmurf = formData => {
  return dispatch => {
    dispatch({ type: "START" });
    axios
      .post("http://localhost:3333/smurfs", formData)
      .then(res => {
        console.log(res.data);
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: "START" });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err));
  };
};
