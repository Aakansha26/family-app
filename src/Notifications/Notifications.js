import React, { useState, useEffect} from 'react'
import NotificationBar from './NotificationBar/NotificationBar'
import './Notifications.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import db from '../firebase'

function Notifications() {

    const [myEvents, setmyEvents] = useState([]);
    
    //loading events from DB
    useEffect(() => {
        db.collection('events').onSnapshot(snapshot => {
            setmyEvents(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
    }, [])

    const events_today = []
    const events_upcoming = []
    if(myEvents.length > 0)
    {
        for(const myevent of myEvents)
        {
            //if event date is equal to current date, add it to today's events
            if(new Date(myevent.data.eventDate).toDateString() == new Date().toDateString())
            {
                events_today.push(<NotificationBar text={myevent.data.eventName} />)
            }

            //if event date is within 7 days add it to upcoming events
            let curdate = new Date();
            curdate.setDate(curdate.getDate()+7);
            if((new Date(myevent.data.eventDate) > new Date()) && (new Date(myevent.data.eventDate) < curdate))
            {
                events_upcoming.push(<NotificationBar text={myevent.data.eventName} />)
            }
        }
    }
    
    
    return (
        <div className="notifications">
            <div className="today-events">
                <div className="heading">
                    <NotificationsIcon />
                    <h4> TODAY'S EVENTS </h4>
                </div>
                {events_today}
            </div>
            
            <div className="upcoming-events">
                <div className="heading">
                    <NotificationsIcon />
                    <h4> UPCOMING EVENTS </h4>
                </div>
                {events_upcoming}
            </div>
        
        </div>
    )
}

export default Notifications
