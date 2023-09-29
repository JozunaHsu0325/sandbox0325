import React from 'react'
import SideOther from './SideOther'
import Banner from './Banner'
import SideNav from './SideNav'

export default function MainContent() {
    return (
        <div className='mainContent'>
            <div className='container clearfix'>
                <SideNav />
                <Banner />
                <SideOther />
            </div>
        </div>
    )
}
