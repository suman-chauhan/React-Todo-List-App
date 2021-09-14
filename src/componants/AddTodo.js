import React from 'react'
import { useState } from 'react';
export const AddTodo = ( {addTodo}) => {
  const  [title, setTitle] = useState(" ");
 const [desc, setDesc] = useState(" ");
  const Submit = (e)=>
  {
     e.preventDefault();
     if(!(title)|| !(desc))
     {
     
       alert("Title or Description should not be empty.")
     }
    addTodo (title,desc);
  }
    return (
        <div className="container mt-3">
            <h3 >Add a Todo </h3>
            <form onSubmit ={Submit}>
  <div className="mb-3">
    <label  htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange= {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label  htmlFor= "desc"className="form-label">Description</label>
    <input type="text" value={desc} onChange= {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success">AddTodo</button>
</form>
        </div>
    )
}
