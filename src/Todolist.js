import React from 'react'

const Todolist = ({todos}) => {
  return (
    <div>
        {todos.map((todo,index)=>
        <div key={index}>
            <h5> {todo}&nbsp;&nbsp;<button>Delete</button></h5>
            </div>
        )}
      
    </div>
  )
}

export default Todolist
