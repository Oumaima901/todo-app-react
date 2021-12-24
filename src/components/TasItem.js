import React from 'react'

function TaskItem({todo,toggleComplete,handleDelete}) {
    return (
       <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
           <h6 style={{textDecoration: todo.complete ? "" : "line-through"}}>{todo.text}</h6>
           <div className="todo-icon">
           <span className="mx-2 text-primary">
                   <i className="fa fa-check-circle" aria-hidden="true" onClick={toggleComplete}></i>
               </span>
               <span className="mx-2 text-success">
                   <i className="fas fa-pen"></i>
               </span>
              
               <span className="mx-2 text-danger">
                   <i className="fas fa-trash" onClick={handleDelete}></i>
               </span>
           </div>
       </li>
    )
}

export default TaskItem



