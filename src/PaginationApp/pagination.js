import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './pagination.js';

const App = () => {
  const[data,setdata]=useState([]);
  const[perpage,setpage]=useState('');
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
      setdata(res.data);setpage(res.data.slice(0,20))
    })
  },[])
  const pageHandler=(pageNumber)=>{
    setpage(data.slice((pageNumber*10)-10,pageNumber*10))

}
  
  
  return (
    <div>
      <h1>Hello World!</h1>
      
      {data.length>=1? 
      <div>
        < ul className='list-group'>
        {perpage.map((post,key)=><div key={post.id} className="list-group-item">{post.title}</div>)}<br/>
        <Pagination data={data} pageHandler={pageHandler}/>
        </ul>
      </div>:null
     
      }
      
       
    </div>
    
  )
  
}

export default App
