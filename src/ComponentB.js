
import React,{useContext} from 'react'
import {store} from './App';

const ComponentB = () => {
  const[data,setdata]=useContext(store)

  return (
    <div>
      ComponentB {data}
    </div>
  )
}

export default ComponentB
