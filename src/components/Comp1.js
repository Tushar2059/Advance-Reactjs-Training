import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Comp1 = () => {

    const navigate= useNavigate();

   const handle = ()=>
   {
    navigate("/comp2",{state : {username:"Tushar",id:2}});
   }
  return (
    <>
    <div>Comp1</div>
    <Button onClick={handle}>Click</Button>
    </>
  )
}

export default Comp1