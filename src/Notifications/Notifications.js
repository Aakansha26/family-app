import React, { useState, useEffect} from 'react'
import NotificationBar from './NotificationBar/NotificationBar'
import './Notifications.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import db from '../firebase'

function Notifications() {

    const [myEvents, setmyEvents] = useState([]);

    useEffect(() => {
        db.collection('events').onSnapshot(snapshot => {
            setmyEvents(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
            console.log(myEvents);
        })
    }, [])

    const notifs = []
    if(myEvents.length > 0)
    {
        for(const myevent of myEvents)
        {
            if(new Date(myevent.data.eventDate).toDateString() == new Date().toDateString())
            {
                console.log("equal");
                notifs.push(<NotificationBar text={myevent.data.eventName} />)
            }
        }
    }
    
    
    return (
        <div className="notifications">
            
            <div className="heading">
                <NotificationsIcon />
                <h4> TODAY'S EVENTS </h4>
            </div>
          
            {notifs}
            
        </div>
    )
}

export default Notifications
