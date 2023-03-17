import React,{useContext} from 'react'
import {store} from './App';

const ComponentC = () => {
    const [data,setdata]=useContext(store)
  return (
    <div>
      ComponentC {data}
    </div>
  )
}

export default ComponentC
