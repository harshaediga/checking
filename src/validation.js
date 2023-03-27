import React,{useState}from 'react'

const App = () => {
  
    const[data,setData]=useState(
      {
        Username:'',
        password:''
      })
      const{Username,password}=data;

  
  const ChangeHandler=e=>
  {
   setData({...data,[e.target.name]:[e.target.value]})
  }
  const Handler=e=>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      
      <center>
        <h1>Login Form</h1>
        <form onSubmit={Handler}>
          username:<input type="text" name="Username" value={Username} onChange={ChangeHandler}/><br/>
          password:<input type="password" name="password" value={password} onChange={ChangeHandler}/><br/><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}

export default App
