import React from 'react'
import {UseContext} from './App.js';

const ComponentC = () => {
  return (
    <div>
      <UseContext.Consumer>
        {value=><div>{value}</div>}
      </UseContext.Consumer>
    </div>
  )
}

export default ComponentC
