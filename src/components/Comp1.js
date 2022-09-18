import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementCounter, incrementCounter1, incrementUniversalCount } from "../store/store";

const Comp1 = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let globalState = useSelector((globalState) => globalState);
  let { firstStore, secondStore } = useSelector((state) => state);
  console.log(globalState);

  const handle = () => {
    
    if(firstStore?.universalCount==100)
      {
        dispatch(incrementUniversalCount());
         alert(firstStore?.universalCount);
        navigate("/comp2", { state: { username: "Tushar", id: firstStore?.universalCount } });
        console.log(firstStore?.universalCount);
      }
    
  };
  const handle1 = () => {
    navigate(-1);
  };

    const dispatchToRedux = () => {
      dispatch(incrementCounter());
    };
    // useEffect(()=>{
    //   if(firstStore?.universalCount==1)
    //   {
    //     dispatch(incrementUniversalCount);
       
    //   }
    // },[]);
  return (
    <>
    <h1>This is component {firstStore?.universalCount}</h1>
      <div>Component 1</div>
      <p>{globalState.firstStore?.message}</p>
      <p>{firstStore?.message}</p>
      <p>Counter in second store : {secondStore?.counter}</p>
      <p>Counter in first store :{firstStore?.counter}</p>
      <Button onClick={() => dispatch(incrementCounter1())}>
        Counter with redux1 first store
      </Button>
      <Button onClick={dispatchToRedux}>
        Counter with redux2 second store
      </Button>
      <Button onClick={handle}>Next</Button>
      <Button onClick={handle1}>Back</Button>
    </>
  );
};

export default Comp1;
