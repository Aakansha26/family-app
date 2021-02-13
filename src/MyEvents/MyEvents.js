import React from 'react'
import MyEventsList from './MyEventsList/MyEventsList'
import Sidebar from '../Sidebar/Sidebar';
import Notifications from '../Notifications/Notifications';
import './MyEvents.css'

//component to show list of important family events user has created
function MyEvents() {

    return (
        <div className="myEvents">
            <Sidebar />
            <MyEventsList />
            <Notifications />
        </div>
    )
}

export default MyEvents
