import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Comp1 = () => {
  const navigate = useNavigate();
  let globalState = useSelector((globalState)=>globalState);
  console.log(globalState)
 
 
  const handle = () => {
    navigate("/comp2", { state: { username: "Tushar", id: 2 } });
  };
  const handle1 = () => {
    navigate(-1);
  };
  return (
    <>
      <div>Component 1</div>
      <p>{globalState.firstStore.message}</p>
      <Button onClick={handle}>Click</Button>
      <Button onClick={handle1}>Back</Button>
    </>
  );
};

export default Comp1;
