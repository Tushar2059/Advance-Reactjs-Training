import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementCounter } from "../store/store";

const Comp1 = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let globalState = useSelector((globalState) => globalState);
  let { firstStore, secondStore } = useSelector((state) => state);
  console.log(globalState);

  const handle = () => {
    navigate("/comp2", { state: { username: "Tushar", id: 2 } });
  };
  const handle1 = () => {
    navigate(-1);
  };

    const dispatchToRedux = () => {
      dispatch(incrementCounter());
    };
  return (
    <>
      <div>Component 1</div>
      <p>{globalState.firstStore?.message}</p>
      <p>{firstStore?.message}</p>
      <p>Counter : {secondStore?.counter}</p>
      <Button onClick={() => dispatch(incrementCounter())}>
        Counter with redux1
      </Button>
      <Button onClick={dispatchToRedux}>
        Counter with redux2
      </Button>
      <Button onClick={handle}>Next</Button>
      <Button onClick={handle1}>Back</Button>
    </>
  );
};

export default Comp1;
