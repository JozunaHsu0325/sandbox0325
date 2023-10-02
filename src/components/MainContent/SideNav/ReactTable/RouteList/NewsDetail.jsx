import React from 'react'
import { useParams } from 'react-router-dom'
import './index.css';



export default function NewsDetail() {
    const { title, content, urlToImage } = useParams()

    return (
        <div >
            <div>Title: {title}</div>
            <div>Content: {content}</div>
            <div><img className='newsImage' src={urlToImage}></img>
            </div>

        </div>
    )
}
