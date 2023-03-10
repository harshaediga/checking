import React,{useState} from 'react'

const App = () => {
  const City=[
    {name:"smp",id:'1'},
    {name:'atp',id:'2'},
    {name:'ptp',id:'3'}
  
  ]
  const[search,setsearch]=useState("");
  const handler=e=>{
    setsearch(e.target.value)
  }
  return ( 
    <div>
      <center>
      <h4> enter your city:</h4>
      <input type='text' value={search} onChange={handler}/><br/>
      {City.filter(data=>data.name.toLowerCase().includes(search.toLowerCase())).map(data=>{
        return<div style={{"border":'2px solid black','padding':'10px','margin':'10px','maxwidth':'70%'}}>
          {data.name}
        </div>
      })}
      
      </center>
      
    </div>
  )
}

export default App

