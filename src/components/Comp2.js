import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { incrementUniversalCount } from '../store/store';

const Comp2 = () => {
  let dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const username=location.state.username;
    const id=location.state.id;
   let {firstStore}= useSelector((state)=>state);
    const handle=() =>
    {
      if(firstStore?.universalCount==105)
      {
        dispatch(incrementUniversalCount());
        // alert(firstStore?.universalCount);
        navigate("/comp3");
      }
           
    }

    const handle1=() =>
    {
             navigate(-1);
           
    }
  return (

    <>
    <h1>This is component {firstStore?.universalCount}</h1>
    <div>Comp2</div>
    <h2>User name is : {username} and user id is :  {id}</h2>
    <Button onClick={handle}>Go to comp 3</Button>
    <Button onClick={handle1}>Back</Button>
    </>
  )
}

export default Comp2