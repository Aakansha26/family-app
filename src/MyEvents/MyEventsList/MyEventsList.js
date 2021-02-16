import React, { useState, useEffect} from 'react'
import db, { auth } from '../../firebase'
import MyEventBar from './MyEventBar/MyEventBar'
import './MyEventsList.css'

//Component to show list of events
function MyEventsList() {

    const [myEvents, setmyEvents] = useState([]);

     //loading user events from DB
    useEffect(() => {
        const userid = auth.currentUser.uid;
        db.collection('events').where("userRef", "==", `/users/${userid}`)
            .onSnapshot((querySnapshot) => {
                setmyEvents(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
                console.log(myEvents);
            })
             
    }, [])

     //Function to delete event 
     const deleteEvent = (id) => {
        db.collection('events').doc(id).delete();
     }

    return (
        <div className="myEventsList">
            {myEvents.map(myEvent => (
                <MyEventBar
                    key={myEvent.id}
                    id = {myEvent.id}
                    eventName={myEvent.data.eventName}
                    eventDescription={myEvent.data.eventDescription}
                    eventDate={myEvent.data.eventDate}
                    deleteEvent = {deleteEvent}
                />
            ))}
        </div>
    )
}

export default MyEventsList