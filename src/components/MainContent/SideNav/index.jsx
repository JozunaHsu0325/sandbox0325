import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom';
import './index.css'
import routes from './routes'

export default function SideNav() {
    const element = useRoutes(routes)

    return (
        <div className='pageContent'>
            <div className='side-nav'>
                <ul className='side-nav-item '>
                    <li><NavLink className="list-group-item" to="/WeatherData" >Weather</NavLink></li>
                    <li><NavLink className="list-group-item" to="/RouteList"  >RouteList</NavLink></li>
                    <li><NavLink className="list-group-item " to="/ToDoList" >ToDoList</NavLink></li>


                </ul>
                <div className='showTable'>{element}</div>
 
            </div>
        </div>
    )
}
