import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'


export default function Header() {
  return (
    <div className='header'>
        <div className='logo leftfix' >
          <img src='/images/logo.png' alt='LOGO' className='logo-image leftfix' />
          <NavLink className='headTitle' to="/TopTable">React Route Demo</NavLink>
        </div>
        <ul className='topItem'>
          <li>ToDoList</li>
          <li>Weather</li>
          <li>News&Messages</li>
          
        </ul>
    </div>
  )
}
