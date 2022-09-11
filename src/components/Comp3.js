import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Comp3 = () => {
    const navigate = useNavigate();
    const handle1=() =>
    {
             navigate(-1);
    }
  return (
    <>
    <div>Comp3</div>
    <Button onClick={handle1}>Back</Button>
    </>
  )
}

export default Comp3