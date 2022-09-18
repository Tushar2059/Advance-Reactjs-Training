import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Comp3 = () => {
  let {firstStore}= useSelector((state)=>state);
    const navigate = useNavigate();
    const handle1=() =>
    {
     
             navigate(-1);
    }
  return (
    <>
     <h1>This is component {firstStore?.universalCount}</h1>
    <div>Comp3</div>
    <Button onClick={handle1}>Back</Button>
    </>
  )
}

export default Comp3