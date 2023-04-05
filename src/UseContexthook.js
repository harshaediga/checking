import React from 'react';
import ComponentC from './ComponentC';
export  const UseContext=React.createContext();

const App = () => {
  return (
    <div>
      <center>
        <UseContext.Provider
          value={'HarshaSmart'}><ComponentC/>
        </UseContext.Provider>
      </center>
    </div>
  )
}

export default App
