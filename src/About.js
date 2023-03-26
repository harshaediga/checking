import React,{useState} from 'react';
import{Redirect} from 'react-router';
const About = () => {
  const[auth,Setauth]=useState(false)

  return (
    <div>
      <h4> welcome to Homepage</h4>
      <button onClick={()=>}>Login!!!</button>
    </div>
  )
}

export default About
