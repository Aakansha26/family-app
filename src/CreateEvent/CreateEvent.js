import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notifications from '../Notifications/Notifications'
import CreateEventForm from './CreateEventForm/CreateEventForm'
import './CreateEvent.css'

function CreateEvent() {
    return (
        
        <div className="createEvent">
            <Sidebar />
            <CreateEventForm />
            <Notifications />
        </div>
       
    )
}

export default CreateEvent
