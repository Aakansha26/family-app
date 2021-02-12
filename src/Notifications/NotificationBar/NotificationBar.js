import React from 'react'
import './NotificationBar.css'

function NotificationBar({text}) {
    return (
        <div className="notificationBar">
            <p>{text}</p>
        </div>
    )
}

export default NotificationBar
