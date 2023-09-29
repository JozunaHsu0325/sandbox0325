import React,{useState} from 'react'
import './index.css'


export default function ToDoList_Item(props) {
  const [mouse, setMouse]=useState(false)
  
  const handleMouse=(flag)=>{
    return()=>{
      setMouse(flag);
    }
  }
  const handleCheck=(id)=>{
    return(event)=>{
      props.updateTodo(id,event.target.checked)
    }
  }

  const handleDelete=(id)=>{
    if(window.confirm('Are you sure you want to delete'))
    props.deleteTodo(id)
  }

  const {id,name,done}=props;
  return (
    <li style={{backgroundColor:mouse ? '#ddd' : 'white' }} onMouseLeave={handleMouse(false)} onMouseEnter={handleMouse(true)}>
    <label>
      <input type='checkbox' checked={done} onChange={handleCheck(id)} />
      <span>{name}</span>
    </label>
    <button onClick={()=>handleDelete(id)} className='btn btn-danger' style={{display:mouse?'block': 'none'}} >Delete</button>
  </li>  )
}
