import React,{useState,useEffect} from 'react'

const App = () => {
  const[data,SetData]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(
      response=>response.json()
    ).then(json=>SetData(json))
  },[])

  
  return (
    <div>
      {data.map(item=><li key={item.id}>{item.name}</li>)}
      
    </div>
  )

  }

export default App
