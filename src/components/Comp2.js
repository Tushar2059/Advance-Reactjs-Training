import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'

const Comp2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username=location.state.username;
    const id=location.state.id;

    const handle=() =>
    {
             navigate("/comp3");
    }

    const handle1=() =>
    {
             navigate(-1);
    }
  return (

    <>
    <div>Comp2</div>
    <h2>User name is : {username} and user id is :  {id}</h2>
    <Button onClick={handle}>Go to comp 3</Button>
    <Button onClick={handle1}>Back</Button>
    </>
  )
}

export default Comp2