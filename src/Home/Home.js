import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Notifications from '../Notifications/Notifications'
import './Home.css'

function Home() {
    return ( 
        <div className="home">
            <Sidebar />
            <Feed />
            <Notifications />
        </div>
    )
}

export default Home
