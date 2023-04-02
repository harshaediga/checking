import React,{useState} from 'react'

const App = () => {
  const[task,settask]=useState('');
  const[todos,settodos]=useState([]);
  const changehandler=e=>{
    settask(e.target.value)
  }
  const submit=e=>{
    e.preventDefault();
    const newtodos=[...todos,task]
    settodos(newtodos); 
    settask('');
  }
  const deletehandler=(indexvalue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexvalue);
    settodos(newTodos)
  }
  return (
    <div>
      <center>
        <div classname="card">
          <div classname="cardbody">
            <h5 classname="card-title"> Todo Management Application</h5>
            <form onSubmit={submit}>
              <input type="text" name="Task" value={task} onChange={changehandler} />&nbsp;&nbsp;
              <input type="Submit" name="Add" value="Add"/>

            </form>
            {todos.map((todo,index)=>
                  <div key={index}>
            <h5> {todo}&nbsp;&nbsp;<button onClick={()=> deletehandler(index)}>Delete</button></h5>
            </div>
        )}
      
          </div>

        </div>
      </center>
    </div>
  )
}

export default App
