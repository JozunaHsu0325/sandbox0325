import './index.css';
import ToDoList_Header from './ToDoList_Header'
import ToDoList_List from './ToDoList_List'
import ToDoList_Footer from './ToDoList_Footer'
import { useState } from 'react';
function ToDoList(props) {
  

  //初始化狀態
  
    const initialTodos=[
      {id:'001', name:'eat',done:true},
      {id:'002', name:'sleep',done:true},
      {id:'003', name:'Coding',done:false},
      {id:'004', name:'Relax',done:true}
    ]
    const[todos, setTodos]=useState(initialTodos);

  
    const addTodo=(todoObj)=>{
    const newTodos=[todoObj,...todos];
    setTodos(newTodos)
  };
   const updateTodo=(id,done)=>{
      
  const newTodos=todos.map((todoObj)=>{
        if(todoObj.id === id )return{...todoObj,done}
        else return todoObj
      })   
      setTodos(newTodos)
    }
  
  const deleteTodo=(id)=>{
    const newTodos= todos.filter((todoObj)=>{
      return todoObj.id !== id;
    })
    setTodos(newTodos)
  }  
  const checkAllTodo=(done)=>{
    const newTodos= todos.map((todoObj)=>{
      return{...todoObj,done}
    })
    setTodos(newTodos)
  }
  const clearAllDone=()=>{
   const newTodos= todos.filter((todoObj)=>{
      return !todoObj.done;
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='root'>
          <div className="todo-container"> 
            <div className="todo-wrap">
              <ToDoList_Header addTodo={addTodo} />
              <ToDoList_List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
              <ToDoList_Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ToDoList;
