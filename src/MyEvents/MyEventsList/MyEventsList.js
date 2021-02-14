import React, { useState, useEffect} from 'react'
import db from '../../firebase'
import MyEventBar from './MyEventBar/MyEventBar'
import './MyEventsList.css'

//Component to show list of events
function MyEventsList() {

    const [myEvents, setmyEvents] = useState([]);

    useEffect(() => {
        db.collection('events').onSnapshot(snapshot => {
            setmyEvents(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
    }, [])

    return (
        <div className="myEventsList">
            {myEvents.map(myEvent => (
                <MyEventBar
                    key={myEvent.data.id}
                    id = {myEvent.id}
                    eventName={myEvent.data.eventName}
                    eventDescription={myEvent.data.eventDescription}
                    eventDate={myEvent.data.eventDate}
                />
            ))}
        </div>
    )
}

export default MyEventsList