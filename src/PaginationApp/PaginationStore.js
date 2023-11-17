import React from 'react'
import { Button } from 'react-bootstrap'
const Pagination = ({data,pageHandler}) => {
    const pageNumbers=[]
    for(let i=1;i<Math.ceil(data.length/20)+1;i++){
        pageNumbers.push(i)
    }
    

  return (
    <div>
      <center>
        {pageNumbers.map((page)=><Button className='pagebutton m-2 ' onClick={()=>{
            pageHandler(page)

        }}>{page}</Button>)}
      </center>
    </div>
  )
}

export default Pagination
