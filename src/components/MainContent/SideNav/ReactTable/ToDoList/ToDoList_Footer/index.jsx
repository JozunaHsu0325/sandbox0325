import React from 'react'
import './index.css'

export default function ToDoList_Footer(props) {
  const {todos}=props
  const doneCount= todos.filter((todo)=>todo.done).length
  const total=todos.length
  const handleCheckAll=(event)=>{
    props.checkAllTodo(event.target.checked)
  }
  const handleClearAllDone=()=>{
    props.clearAllDone()
  }
  return (
    <div className="todo-footer">
    <label>
    <input type='checkbox' onChange={handleCheckAll} checked={doneCount === total && total !==0 ? true:false} />
    </label>
    <span>
      <span>已完成{doneCount} / </span>全部{total}
    </span>
    <button onClick={handleClearAllDone}  className='btn btn-danger' >清除已完成任務</button>
  </div>  )
}
