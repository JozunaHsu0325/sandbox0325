import React from 'react'
import './index.css'
import ToDoList from './ReactTable/ToDoList';
import WeatherData from './ReactTable/Weather';
export default function SideNav() {
    return (
        <div>
            <ul className='side-nav leftfix'>
                <li><a href='#'>ToDoList</a>
                    <div className=' secondMenu clearfix'>
                        <ToDoList />
                    </div>

                </li>
                <li><a href='#'>天氣預報</a>
                    <div className='secondMenu clearFix'>
                        <WeatherData/>
                    </div>

                </li>
                
            </ul>
        </div>
    )
}
