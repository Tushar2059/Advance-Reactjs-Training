import React from 'react'
import { useLocation } from 'react-router-dom'

const Comp2 = () => {
    const location = useLocation();
    const username=location.state.username;
    const id=location.state.id;
  return (

    <>
    <div>Comp2</div>
    <h2>User name is : {username} and user id is :  {id}</h2>
    </>
  )
}

export default Comp2