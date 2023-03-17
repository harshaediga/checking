import React from 'react'

const Hoc = () => {
  const[count,setcount]=React.useState(0);
  React.useEffect(()=>{
    if(count===5){
    throw new Error('App crashed')
    }
  },[count])
  return (
    <div>
      <center>
        <h1> Component:{count}</h1>
        <button onClick={()=>setcount(count+1)}> component increment</button>
      </center>
    </div>
  )
}

export default Hoc;