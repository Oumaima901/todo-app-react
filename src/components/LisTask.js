import React from 'react'
import TaskItem from './TaskItem'


function ListTask({todos,handleDelete,toggleComplete,clearList}) {
   
  
    return (
       
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">Todo List</h3>
            {todos.map(todo=>(
           <TaskItem 
           key={todo.id}
           todo={todo}
           id={todo.id}
           complete={todo.complete}
           handleDelete={()=>handleDelete(todo.id)}
           toggleComplete={()=>toggleComplete(todo.id)}
           />
           ))}
            <button type="button"  onClick={clearList}className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
        </ul>
       
    )
}

export default ListTask
