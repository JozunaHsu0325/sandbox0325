import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css';

 function ToDoList_Header(props) {
  
  const [inputValue, setInputValue] = useState(''); // 使用 useState 來管理輸入值

  const handleKeyUp = (event) => {
    if (event.key !== 'Enter') return;

    const todoName = inputValue.trim(); // 獲取輸入值並去除首尾空白
    if (todoName === '') return; // 如果輸入值為空，則不執行任何操作

    const todoObj = { id: nanoid(), name: todoName, done: false };
    props.addTodo(todoObj);
    setInputValue(''); // 清空輸入欄位
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 更新輸入值狀態
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="請輸入任務，並按確定鍵進行確認"
        onKeyUp={handleKeyUp}
        value={inputValue} // 使用狀態中的值來控制輸入框的值
        onChange={handleInputChange} // 監聽輸入框變化，更新狀態
      />
    </div>
  );
}
ToDoList_Header.propTypes={
  addTodo:PropTypes.func.isRequired
}
export default ToDoList_Header;