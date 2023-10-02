import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css';


export default function Message() {
    const [message] = useState([
        { id: '001', title: 'Message1', content: '內容一' },
        { id: '002', title: 'Message2', content: '內容二' },
        { id: '003', title: 'Message3', content: '內容三' },
        { id: '004', title: 'Message4', content: '內容四' },
    ])
    return (
        <div>
            <div className='titleTable'>
            <ul>
                {
                    message.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                            </li>
                        )
                    }
                    )}
            </ul>
            </div>
            <div className='dataTable'><Outlet/></div>
            
        </div>
    )
}
