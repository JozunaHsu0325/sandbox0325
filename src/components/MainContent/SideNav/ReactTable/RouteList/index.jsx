import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'

export default function RouteList() {
    return (
        <div className='routeList clearfix'>
            <div>
                <div className='routeHead'>
                    <li >
                        <NavLink to="News">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="Message">Message</NavLink>
                    </li>
                </div>
                <div className='routeContent'>
                    <div>
                        <li><Outlet /></li>
                    </div>
                </div>
                <div className='routeDetail'>

                </div>

                <ul>



                </ul>
            </div>


        </div>
    )
}
