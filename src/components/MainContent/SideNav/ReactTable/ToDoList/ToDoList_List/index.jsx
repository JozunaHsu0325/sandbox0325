import React from 'react'
import PropTypes from 'prop-types';
import ToDoList_Item from '../ToDoList_Item'
import './index.css'

 function ToDoList_List(props) {

  const {todos,updateTodo,deleteTodo}=props
  return (
    <ul className='todo-main'>
   {
    todos.map((todo)=>{
      return <ToDoList_Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    })
   }
    
  </ul>  
  )
}
ToDoList_List.propTypes={
  todos:PropTypes.array.isRequired,
  updateTodo:PropTypes.func.isRequired,
  deleteTodo:PropTypes.func.isRequired

}
export default ToDoList_List;